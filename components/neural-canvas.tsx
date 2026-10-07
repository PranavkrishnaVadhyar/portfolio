"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import * as THREE from "three"

function Network({ moving, compact }: { moving: boolean; compact: boolean }) {
 const group = useRef<THREE.Group>(null), nodes = useRef<THREE.InstancedMesh>(null), pulses = useRef<THREE.InstancedMesh>(null)
 const initialized = useRef(false)
 const elapsed = useRef(0), object = useMemo(() => new THREE.Object3D(), [])
 const data = useMemo(() => {
   const base: THREE.Vector3[] = []
   const perLayer = compact ? 8 : 13
   for (let layer = 0; layer < 5; layer++) for (let j = 0; j < perLayer; j++) {
     const a = j / perLayer * Math.PI * 2 + layer * .47, radius = .8 + ((j * 7 + layer) % 5) * .19
     base.push(new THREE.Vector3((layer - 2) * 1.22 + Math.cos(a) * .12, Math.sin(a) * radius, Math.cos(a) * radius * .85))
   }
   const edges: [number, number][] = []
   for (let i = 0; i < base.length - perLayer; i++) {
     const next = Math.floor(i / perLayer) + 1
     const nearest = Array.from({length:perLayer}, (_,j)=>next*perLayer+j).sort((a,b)=>base[i].distanceToSquared(base[a])-base[i].distanceToSquared(base[b])).slice(0,3)
     nearest.forEach(j=>edges.push([i,j]))
   }
   const geometry = new THREE.BufferGeometry()
   geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(edges.length * 6), 3).setUsage(THREE.DynamicDrawUsage))
   const dust = new Float32Array((compact ? 450 : 1500) * 3)
   for (let i = 0; i < dust.length / 3; i++) { const a=i*2.399963, r=3+(i%19)*.12; dust.set([Math.cos(a)*r, Math.sin(i*1.731)*2.65, Math.sin(a)*2.2-1.5],i*3) }
   return { base, current:base.map(p=>p.clone()), edges, geometry, dust }
 }, [compact])
 useEffect(()=>{initialized.current=false;return()=>data.geometry.dispose()},[data])
 useFrame((state, delta) => {
   if (!nodes.current || !pulses.current || !group.current) return
   if (!moving && initialized.current) return
   initialized.current = true
   if (moving) elapsed.current += Math.min(delta,.04)
   const t=elapsed.current
   group.current.rotation.y = -.35 + (moving ? Math.sin(t*.12)*.22 : 0)
   group.current.rotation.z = -.09
   const edgeArray = data.geometry.attributes.position.array as Float32Array
   data.base.forEach((p,i)=>{
     const dx=p.x-state.pointer.x*3.4, dy=p.y-state.pointer.y*2.1, distance=Math.sqrt(dx*dx+dy*dy)
     const force=moving ? Math.max(0,1-distance/1.3)*.24 : 0
     const targetX=p.x + dx/Math.max(distance,.01)*force, targetY=p.y+dy/Math.max(distance,.01)*force
     const v=data.current[i]; v.x += (targetX-v.x)*.12; v.y += (targetY-v.y)*.12
     object.position.copy(v); object.scale.setScalar((i%7===0 ? .085 : .047)*(1+(moving ? Math.sin(t*1.4+i)*.12 : 0))); object.updateMatrix(); nodes.current!.setMatrixAt(i,object.matrix)
   })
   data.edges.forEach(([a,b],i)=>{data.current[a].toArray(edgeArray,i*6);data.current[b].toArray(edgeArray,i*6+3)})
   data.geometry.attributes.position.needsUpdate=true
   for(let i=0;i<24;i++){ const [a,b]=data.edges[(i*7)%data.edges.length], p=(t*.18+i/24)%1; object.position.lerpVectors(data.current[a],data.current[b],p); object.scale.setScalar(.026);object.updateMatrix();pulses.current.setMatrixAt(i,object.matrix) }
   nodes.current.instanceMatrix.needsUpdate=true; pulses.current.instanceMatrix.needsUpdate=true
 })
 return <Float speed={moving ? .5 : 0} rotationIntensity={0} floatIntensity={moving ? .15 : 0}><group ref={group}>
   <instancedMesh ref={nodes} args={[undefined,undefined,data.base.length]} frustumCulled={false}><sphereGeometry args={[1,12,8]} /><meshBasicMaterial color={[0,2.1,2.8]} toneMapped={false} /></instancedMesh>
   <lineSegments geometry={data.geometry}><lineBasicMaterial color="#597ec0" transparent opacity={.5} depthWrite={false} /></lineSegments>
   <instancedMesh ref={pulses} args={[undefined,undefined,24]} frustumCulled={false}><sphereGeometry args={[1,8,6]} /><meshBasicMaterial color={[2.5,.65,4]} toneMapped={false} /></instancedMesh>
   <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[data.dust,3]} /></bufferGeometry><pointsMaterial color="#607caf" size={.011} transparent opacity={.45} depthWrite={false} /></points>
 </group></Float>
}
function Lifecycle({ ready }: { ready: (value:boolean)=>void }) {
 const gl=useThree(s=>s.gl), invalidate=useThree(s=>s.invalidate)
 useEffect(()=>{ const lost=(e:Event)=>{e.preventDefault();ready(false)};const restored=()=>{ready(true);invalidate()};ready(true);gl.domElement.addEventListener('webglcontextlost',lost);gl.domElement.addEventListener('webglcontextrestored',restored);return()=>{gl.domElement.removeEventListener('webglcontextlost',lost);gl.domElement.removeEventListener('webglcontextrestored',restored)} },[gl,invalidate,ready])
 return null
}
class SceneBoundary extends Component<{children:ReactNode; onFailure:()=>void},{failed:boolean}> { state={failed:false}; componentDidCatch(){this.props.onFailure()}; static getDerivedStateFromError(){return{failed:true}};render(){return this.state.failed ? null : this.props.children} }
export default function NeuralCanvas({ active, moving, compact, onReady }: { active:boolean; moving:boolean; compact:boolean; onReady:(ready:boolean)=>void }) {
 const [bloom,setBloom]=useState(!compact)
 return <SceneBoundary onFailure={()=>onReady(false)}><Canvas className="neural-canvas" dpr={[1,1.5]} camera={{position:[0,0,8.5],fov:46}} frameloop={active ? moving ? "always" : "demand" : "never"} gl={{alpha:false,antialias:false,powerPreference:"low-power"}} fallback={null} onCreated={({gl})=>{gl.setClearColor(0x05060a,1)}}>
   <Lifecycle ready={onReady} /><Network moving={moving && active} compact={compact} />
   {bloom && !compact && <EffectComposer multisampling={0}><Bloom mipmapBlur intensity={.7} luminanceThreshold={.8} luminanceSmoothing={.4} /></EffectComposer>}
   <QualityGuard disable={()=>setBloom(false)} />
 </Canvas></SceneBoundary>
}
function QualityGuard({disable}:{disable:()=>void}) { const slow=useRef(0), done=useRef(false);const setDpr=useThree(s=>s.setDpr);useFrame((_,d)=>{if(done.current)return;if(d>.045&&d<.5)slow.current++;if(slow.current>60){done.current=true;setDpr(1);disable()}});return null }



