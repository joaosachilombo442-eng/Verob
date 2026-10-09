import { Building2, BriefcaseBusiness, ShieldCheck, Cog, BrickWall, Printer, Armchair, FlaskConical, Globe, ClipboardList } from 'lucide-react';
export const company = {
  name: 'VEROB — Comércio e Serviços, (SU), LDA',
  director: 'Tiburcio Malenga',
  directorRole: 'Diretor Geral',
  phone: '+244 934 605 151',
  phoneHref: 'tel:+244934605151',
  whatsapp: '+244 934 504 224',
  emailGeneral: 'geral@verob.org',
  emailGeneralNote: 'Informações, pedidos de orçamento e contactos gerais.',
  emailDirector: 'tiburcio.malenga@verob.org',
  emailDirectorNote: 'Assuntos específicos dirigidos à Direção Geral.',
  location: 'Luanda, Angola',
};
export const social = {
  facebook: 'https://web.facebook.com/profile.php?id=61595041866731',
  instagram: 'https://www.instagram.com/verob.oficial/',
  instagramHandle: '@verob.oficial',
};
export const whatsappUrl = (message: string) => `https://wa.me/244934504224?text=${encodeURIComponent(message)}`;
export const generalMessage = 'Olá, VEROB. Vi o vosso portfólio e gostaria de solicitar informações ou um orçamento.';
export const serviceMessage = (name: string) => `Olá, VEROB. Gostaria de solicitar informações e uma proposta sobre: ${name}.`;
export const categories = ['Construção', 'Escritório e informática', 'Proteção e equipamentos', 'Indústria e negócios'] as const;
export type Category = (typeof categories)[number];
type Service = { id: string; name: string; category: Category; icon: typeof Building2; short: string; description: string; details?: string[]; action: string };
export const services: Service[] = [
  { id: 'construcao', name: 'Construção civil', category: 'Construção', icon: Building2, short: 'Execução de obras e intervenções.', description: 'Apresente-nos o seu projeto ou a intervenção de que precisa e consulte os serviços de construção civil da VEROB.', action: 'Falar sobre uma obra' },
  { id: 'escritorio', name: 'Materiais de escritório', category: 'Escritório e informática', icon: BriefcaseBusiness, short: 'Fornecimentos para o dia a dia de trabalho.', description: 'Fornecimento de materiais de escritório para apoiar as atividades de empresas, instituições e organizações.', action: 'Consultar materiais de escritório' },
  { id: 'individuais', name: 'Materiais individuais', category: 'Proteção e equipamentos', icon: ShieldCheck, short: 'Proteção individual e segurança.', description: 'Fornecimento de materiais de uso individual, incluindo equipamentos de proteção individual e materiais de segurança, conforme a necessidade apresentada.', action: 'Consultar proteção e segurança' },
  { id: 'equipamentos', name: 'Equipamentos', category: 'Proteção e equipamentos', icon: Cog, short: 'Equipamentos para os seus objetivos.', description: 'Comercialização e fornecimento de equipamentos, mediante indicação da finalidade, especificações e quantidades pretendidas.', action: 'Consultar equipamentos' },
  { id: 'materiais-construcao', name: 'Materiais de construção', category: 'Construção', icon: BrickWall, short: 'Fornecimento de materiais para obra.', description: 'Fornecimento de materiais de construção para obras, intervenções e diferentes necessidades de projeto.', action: 'Solicitar materiais de construção' },
  { id: 'consumiveis', name: 'Consumíveis informáticos', category: 'Escritório e informática', icon: Printer, short: 'Referências e quantidades à medida.', description: 'Comercialização de consumíveis informáticos para empresas e instituições, mediante consulta das referências e quantidades necessárias.', action: 'Consultar consumíveis' },
  { id: 'mobiliario', name: 'Mobiliário de escritório', category: 'Escritório e informática', icon: Armchair, short: 'Mobiliário para espaços de trabalho.', description: 'Fornecimento de mobiliário para espaços de trabalho, de acordo com as necessidades e especificações apresentadas.', action: 'Solicitar proposta de mobiliário' },
  { id: 'quimicos', name: 'Produtos químicos para a indústria', category: 'Indústria e negócios', icon: FlaskConical, short: 'Petróleo, gás, energia e indústria.', description: 'Comercialização de produtos químicos destinados aos setores de petróleo, gás, energia e indústrias relacionadas, mediante consulta.', action: 'Consultar fornecimentos industriais' },
  { id: 'comercio', name: 'Comércio geral, importação e exportação', category: 'Indústria e negócios', icon: Globe, short: 'Grosso, retalho, importação e exportação.', description: 'Comércio a grosso e a retalho, importação e exportação de bens, conforme as necessidades comerciais apresentadas.', action: 'Apresentar pedido comercial' },
  { id: 'consultoria', name: 'Consultoria, apoio administrativo e logística', category: 'Indústria e negócios', icon: ClipboardList, short: 'Apoio à organização e operação.', description: 'Consultoria empresarial, apoio administrativo e gestão de logística para diferentes necessidades de organização e operação.', details: ['Consultoria empresarial', 'Apoio administrativo', 'Gestão de logística'], action: 'Solicitar apoio empresarial' },
];
export const navigation = [{ id: 'inicio', label: 'Início' }, { id: 'sobre', label: 'Sobre' }, { id: 'servicos', label: 'Serviços' }, { id: 'valores', label: 'Valores' }, { id: 'contactos', label: 'Contactos' }];
export type PortfolioItem = { id: string; category: string; image: string; caption: string };
export type VideoItem = { id: string; cover: string; src: string; title: string; description: string };
export const portfolio: PortfolioItem[] = [];
export const videos: VideoItem[] = [];
