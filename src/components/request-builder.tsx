import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, CheckCircle2, MessageCircle, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, whatsappUrl } from '@/lib/verob';
export function RequestBuilder({ selected, onSelected }: { selected: string[]; onSelected: (value: string[]) => void }) {
 const [step,setStep]=useState(1);
 const [fields,setFields]=useState({name:'',company:'',phone:'',message:''});
 const [error,setError]=useState('');
 const options=[...services.map(s=>s.name),'Informações gerais'];
 const toggle=(name:string)=>onSelected(selected.includes(name)?selected.filter(v=>v!==name):[...selected,name]);
 const next=()=>{ if(step===1 && !selected.length){setError('Selecione pelo menos uma área de interesse.');return;} if(step===2 && (!fields.name.trim() || !fields.message.trim())){setError('Preencha o seu nome e descreva o que precisa.');return;} setError('');setStep(step+1); };
 const message=['Olá, VEROB. Vi o vosso portfólio e gostaria de solicitar informações ou um orçamento.','',`Nome: ${fields.name.trim()}`,fields.company.trim()?`Empresa / instituição: ${fields.company.trim()}`:'',fields.phone.trim()?`Telefone: ${fields.phone.trim()}`:'',`Área de interesse: ${selected.join(', ')}`,`Mensagem: ${fields.message.trim()}`].filter((v,i)=>v || i===1).join('\n');
 return <div className="request-tool" id="pedido">
  <div className="flex justify-between gap-2 mb-5" aria-label={`Etapa ${step} de 3`}>
   {['Áreas','Detalhes','Revisão'].map((label,i)=><div key={label} className={`step-label ${step===i+1?'current':''}`}>{step>i+1?<CheckCircle2 className="text-success"/>:<span className="flex size-6 items-center justify-center rounded-full border">{i+1}</span>}{label}</div>)}
  </div>
  <div className="progress-track mb-7"><div className="progress-fill" data-step={step}/></div>
  <div className="form-panel" key={step}>
   <p className="text-xs text-muted-foreground mb-2">Etapa {step} de 3</p>
   <h3 className="text-xl font-bold mb-5">{step===1?'Escolha as áreas':step===2?'Descreva o que precisa':'Reveja o seu pedido'}</h3>
   {step===1?<div className="space-y-3">{options.map(name=><Button key={name} variant="ghost" className={`choice-button ${selected.includes(name)?'selected':''}`} aria-pressed={selected.includes(name)} onClick={()=>toggle(name)}><span>{name}</span>{selected.includes(name)?<Check/>:<span className="size-4 rounded-sm border border-input"/>}</Button>)}</div>:step===2?<form id="request-details" onSubmit={e=>{e.preventDefault();next();}} className="space-y-4">
    <div><label className="field-label" htmlFor="request-name">Nome <span className="text-primary">*</span></label><input id="request-name" className="field-input" autoComplete="name" required value={fields.name} onChange={e=>setFields({...fields,name:e.target.value})} placeholder="O seu nome" maxLength={150}/></div>
    <div className="grid sm:grid-cols-2 gap-4"><div><label className="field-label" htmlFor="request-company">Empresa / instituição <span className="font-normal text-muted-foreground">(opcional)</span></label><input id="request-company" className="field-input" autoComplete="organization" value={fields.company} onChange={e=>setFields({...fields,company:e.target.value})} maxLength={150}/></div><div><label className="field-label" htmlFor="request-phone">Telefone <span className="font-normal text-muted-foreground">(opcional)</span></label><input id="request-phone" className="field-input" type="tel" autoComplete="tel" value={fields.phone} onChange={e=>setFields({...fields,phone:e.target.value})} maxLength={40}/></div></div>
    <div><label className="field-label" htmlFor="request-message">O que precisa? <span className="text-primary">*</span></label><textarea id="request-message" className="field-input" required value={fields.message} onChange={e=>setFields({...fields,message:e.target.value})} placeholder="Conte-nos sobre o seu projeto, quantidades ou especificações…" maxLength={3000}/></div>
   </form>:<div><div className="flex items-center gap-2 text-success text-sm mb-4"><CheckCircle2/>Pedido pronto para revisão</div>{[{label:'Nome',value:fields.name},{label:'Empresa / instituição',value:fields.company},{label:'Telefone',value:fields.phone},{label:'Áreas de interesse',value:selected.join(', ')},{label:'Mensagem',value:fields.message}].filter(v=>v.value).map(v=><div className="review-row" key={v.label}><p className="text-xs text-muted-foreground">{v.label}</p><p className="text-sm whitespace-pre-wrap">{v.value}</p></div>)}<Button variant="link" className="px-0 mt-3" onClick={()=>setStep(2)}><Pencil/>Editar detalhes</Button></div>}
  </div>
  {error&&<p role="alert" className="text-destructive text-sm mt-4">{error}</p>}
  <div className="flex justify-between items-center mt-6 gap-3">{step>1?<Button variant="ghost" onClick={()=>{setStep(step-1);setError('');}}><ArrowLeft/>Voltar</Button>:<span className="text-xs text-muted-foreground">{selected.length} {selected.length===1?'área selecionada':'áreas selecionadas'}</span>}{step<3?<Button variant="brand" onClick={step===1?next:undefined} type={step===2?'submit':'button'} form={step===2?'request-details':undefined}>Continuar<ArrowRight/></Button>:<Button variant="brand" asChild><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle/>Continuar no WhatsApp</a></Button>}</div>
  {step===3&&<p className="text-xs text-muted-foreground mt-4">O WhatsApp será aberto com o seu pedido preenchido. Basta rever e enviar.</p>}
 </div>;
}
