import { Building2, BriefcaseBusiness, Package, Cog } from 'lucide-react';
export const company = { name: 'VEROB — Comércio e Serviços, (SU), LDA', director: 'Tiburcio Malenga', phone: '+244 934 605 151', phoneHref: 'tel:+244934605151', whatsapp: '+244 934 504 224', email: 'tiburcio.malenga@verob.co.ao', location: 'Luanda, Angola' };
export const whatsappUrl = (message: string) => `https://wa.me/244934504224?text=${encodeURIComponent(message)}`;
export const generalMessage = 'Olá, vi o portfólio da VEROB e gostaria de solicitar um orçamento.';
export const services = [
 { id: 'construcao', name: 'Construção civil', icon: Building2, short: 'O ponto de partida para o seu próximo projeto.', description: 'Apresente-nos o seu projeto ou a intervenção de que precisa e solicite informações sobre os serviços de construção civil da VEROB.', action: 'Falar sobre uma obra', message: 'Olá, VEROB. Gostaria de solicitar informações e um orçamento para um serviço de construção civil.' },
 { id: 'escritorio', name: 'Materiais de escritório', icon: BriefcaseBusiness, short: 'Fornecimentos para a sua atividade.', description: 'Consulte as opções de fornecimento de materiais de escritório para as necessidades da sua empresa, instituição ou atividade.', action: 'Consultar materiais', message: 'Olá, VEROB. Gostaria de consultar a disponibilidade e solicitar um orçamento para materiais de escritório.' },
 { id: 'individuais', name: 'Materiais individuais', icon: Package, short: 'Atenção às suas necessidades específicas.', description: 'Indique os materiais individuais de que necessita e solicite informações sobre disponibilidade e condições de fornecimento.', action: 'Solicitar informações', message: 'Olá, VEROB. Gostaria de solicitar informações sobre o fornecimento de materiais individuais.' },
 { id: 'equipamentos', name: 'Equipamentos', icon: Cog, short: 'Soluções para dar forma aos seus objetivos.', description: 'Partilhe o tipo de equipamento, a quantidade e a finalidade pretendida para solicitar informações e uma proposta.', action: 'Consultar equipamentos', message: 'Olá, VEROB. Gostaria de consultar a disponibilidade e solicitar um orçamento para equipamentos.' },
];
export const navigation = [{ id: 'inicio', label: 'Início' }, { id: 'sobre', label: 'Sobre' }, { id: 'servicos', label: 'Serviços' }, { id: 'valores', label: 'Valores' }, { id: 'contactos', label: 'Contactos' }];
export type PortfolioItem = { id: string; category: string; image: string; caption: string };
export type VideoItem = { id: string; cover: string; src: string; title: string; description: string };
export const portfolio: PortfolioItem[] = [];
export const videos: VideoItem[] = [];
