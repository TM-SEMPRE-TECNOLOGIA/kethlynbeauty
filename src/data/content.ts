import { Service, Testimonial, FAQItem, MetricItem } from '../types';

export const siteConfig = {
  name: "Kethlyn Beauty",
  tagline: "Especialista em Cílios e Sobrancelhas",
  founder: "Kethlyn Torris",
  phone: "(11) 95685-8800",
  phoneRaw: "5511956858800",
  whatsappUrl: "https://wa.me/message/73PQRAPLMASPC1",
  whatsappDefaultMsg: "Olá, Kethlyn! Vi o seu site e gostaria de agendar um horário para realçar meu olhar.",
  maappBookingUrl: "https://online.maapp.com.br/KethlynBeauty",
  instagramUrl: "https://www.instagram.com/kethlynbeauty/",
  instagramHandle: "@kethlynbeauty",
  facebookUrl: "https://www.facebook.com/share/15CRxwexYp/",
  address: "Rua Eva, 359 - Vila dos Pinheiros, Caieiras - SP",
  postalCode: "07717-470",
  city: "Caieiras - SP",
  googleMapsUrl: "https://maps.app.goo.gl/XTzhSTpWu2TW6HRz7",
  googleReviewsDirectUrl: "https://maps.app.goo.gl/XTzhSTpWu2TW6HRz7",
  googleRating: 5.0,
  googleReviewCount: 198,
  
  // Real Local Assets
  logoImage: "/assets/logo.png",
  logomarcaImage: "/assets/logomarca.png",
  fachadaImage: "/assets/fachada.png",
  avatarImage: "/assets/dona.jpg",
  trajectoryImage: "/assets/dona_trajetoria.jpg",
};

export const heroContent = {
  badge: "⭐ 5.0 no Google • Studio em Caieiras - SP",
  title: "Realce a beleza única do seu olhar com técnica, naturalidade e sofisticação",
  subtitle: "Especialista em Extensão de Cílios de alta retenção, Nanopigmentação e Visagismo de Sobrancelhas. Desperte pronta e confiante todos os dias.",
  primaryCTA: "Agendar Horário Online",
  secondaryCTA: "Conversar no WhatsApp",
  trustPill: "+2.000 olhares transformados com biossegurança e conforto",
};

export const marqueeKeywords = [
  "Extensão de Cílios",
  "Volume Brasileiro",
  "Efeito Fox Eyes",
  "Nanopigmentação Fio a Fio",
  "Brow Lamination",
  "Efeito Inglês & Árabe",
  "Retenção Superior a 30 Dias",
  "Biossegurança com Autoclave",
  "Visagismo Personalizado",
  "Avaliação 5.0 no Google",
];

export const lookbookGallery = [
  {
    title: "Volume Brasileiro",
    category: "Extensão em Y",
    image: "/assets/lash_volume_brasileiro.jpg",
    tag: "Mais Pedido",
  },
  {
    title: "Efeito Fox Eyes",
    category: "Delineado Alongado",
    image: "/assets/lash_fox_eyes.jpg",
    tag: "Tendência",
  },
  {
    title: "Nanopigmentação",
    category: "Fios Hiper-Realistas",
    image: "/assets/eyebrow_nanopigmentation.jpg",
    tag: "Alta Precisão",
  },
  {
    title: "Efeito Inglês",
    category: "Curvatura Expressiva",
    image: "/assets/lash_efeito_ingles.jpg",
    tag: "Elegância",
  },
  {
    title: "Brow Lamination",
    category: "Alinhamento & Volume",
    image: "/assets/eyebrow_brow_lamination.jpg",
    tag: "Design Moderno",
  },
  {
    title: "Efeito Árabe",
    category: "Densidade Aveludada",
    image: "/assets/lash_efeito_arabe.jpg",
    tag: "Marcante",
  },
  {
    title: "Shadow Ombré",
    category: "Degradê Suave",
    image: "/assets/eyebrow_shadow_ombre.jpg",
    tag: "Definição",
  },
  {
    title: "Efeito Egípcio",
    category: "Técnica em W",
    image: "/assets/lash_efeito_egipcio.jpg",
    tag: "Tridimensional",
  },
  {
    title: "Lash Lifting",
    category: "Curvatura Natural",
    image: "/assets/lash_lifting_natural.jpg",
    tag: "Sem Extensão",
  },
  {
    title: "Reconstrução com Ativos",
    category: "Terapia de Crescimento",
    image: "/assets/eyebrow_reconstruction.jpg",
    tag: "Tratamento",
  },
];

export const metricsData: MetricItem[] = [
  {
    value: "+2.000",
    label: "Olhares Transformados",
    description: "Atendimentos personalizados e exclusivos",
  },
  {
    value: "5.0 ★",
    label: "Avaliação Máxima",
    description: "Centenas de clientes satisfeitas no Google",
  },
  {
    value: "100%",
    label: "Biossegurança",
    description: "Autoclave, esterilização e descartáveis",
  },
  {
    value: "+30 dias",
    label: "Alta Retenção",
    description: "Técnicas com durabilidade superior comprovada",
  },
];

export const biosafetyContent = {
  badge: "Biossegurança & Padrão Hospitalar",
  title: "A sua saúde e segurança em primeiro lugar em cada detalhe",
  subtitle: "Seguimos protocolos rigorosos de esterilização em autoclave, controle de processo e uso de descartáveis individuais para a sua total tranquilidade.",
  items: [
    {
      title: "Protocolo de Biossegurança",
      subtitle: "Ambiente higienizado e padronizado",
      description: "Desinfecção completa da bancada e maca a cada cliente, uso de EPIs e produtos de grau cosmético e dermatológico de primeira linha.",
      image: "/assets/biosseguranca.jpg",
      tag: "Normas Anvisa",
    },
    {
      title: "Esterilização em Autoclave",
      subtitle: "Pinças e instrumentos selados",
      description: "Todas as pinças passam por lavagem enzimática, secagem e esterilização em autoclave com envelopes grau cirúrgico de uso único.",
      image: "/assets/esterilizacao_1.jpg",
      tag: "100% Estéril",
    },
    {
      title: "Armazenamento & Selagem",
      subtitle: "Abertura do kit na sua presença",
      description: "Os materiais esterilizados são abertos somente na hora do seu atendimento, garantindo integridade e ausência de contaminação.",
      image: "/assets/esterilizacao_2.jpg",
      tag: "Kit Individual",
    },
    {
      title: "Controle Rigoroso de Processo",
      subtitle: "Rastreabilidade e indicadores químicos",
      description: "Controle diário com integradores químicos e fitas de validação térmica para comprovação máxima da eficácia do ciclo esterilizante.",
      image: "/assets/controle_processo.jpg",
      tag: "Controle Químico",
    },
  ]
};

export const trajectoryContent = {
  badge: "Nossa História & Vocação",
  title: "A paixão por transformar a autoestima através da arte do olhar",
  image: "/assets/dona_trajetoria.jpg",
  p1: "A trajetória da Kethlyn Beauty nasceu do desejo genuíno de entregar mais do que um procedimento estético: uma experiência de acolhimento e valorização da beleza única de cada mulher.",
  p2: "Com anos de aperfeiçoamento contínuo em visagismo facial, isolamento milimétrico e retenção avançada, desenvolvemos métodos que respeitam rigorosamente a saúde dos fios naturais.",
  p3: "Hoje, em nosso estúdio moderno e acolhedor em Caieiras, combinamos as técnicas mais modernas do mercado internacional — do delicado Efeito Inglês e Fox Eyes à Nanopigmentação hiper-realista — para que você acorde impecável e radiante todos os dias.",
  highlights: [
    {
      title: "Visagismo Personalizado",
      desc: "Mapeamento exclusivo para valorizar a anatomia dos seus olhos sem efeito artificial ou pesado."
    },
    {
      title: "Saúde e Preservação dos Fios",
      desc: "Isolamento cirúrgico e respeito absoluto ao ciclo de crescimento dos seus cílios e sobrancelhas naturais."
    },
    {
      title: "Ambiente Acolhedor & Seguro",
      desc: "Atendimento calmo, maca ergonômica com travesseiro de conforto e protocolos rigorosos de higiene."
    },
  ]
};

export const servicesData: Service[] = [
  // Cílios - Aplicações Principais com Imagens em Alta Definição
  {
    id: "ap-brasileiro",
    name: "Aplicação Volume Brasileiro",
    category: "cilios-aplicacao",
    price: 150.0,
    duration: 150,
    description: "Aplicação completa do zero com efeito Y. Proporciona um olhar marcante, elegante e extremamente leve.",
    imageUrl: "/assets/lash_volume_brasileiro.jpg",
    isPopular: true,
    tag: "Mais Pedido",
  },
  {
    id: "ap-fox-eyes",
    name: "Aplicação Fox Eyes",
    category: "cilios-aplicacao",
    price: 165.0,
    duration: 150,
    description: "Efeito delineado alongado na extremidade externa dos olhos, levantando o olhar com sofisticação.",
    imageUrl: "/assets/lash_fox_eyes.jpg",
    isPopular: true,
    tag: "Tendência",
  },
  {
    id: "ap-ingles",
    name: "Aplicação Efeito Inglês",
    category: "cilios-aplicacao",
    price: 165.0,
    duration: 150,
    description: "Estilo sofisticado com curvatura expressiva e textura refinada para quem busca destaque e elegância.",
    imageUrl: "/assets/lash_efeito_ingles.jpg",
    tag: "Premium",
  },
  {
    id: "ap-arabe",
    name: "Aplicação Efeito Árabe",
    category: "cilios-aplicacao",
    price: 160.0,
    duration: 150,
    description: "Densidade marcante com acabamento aveludado e uniforme, ideal para ocasiões especiais e presença marcante.",
    imageUrl: "/assets/lash_efeito_arabe.jpg",
    tag: "Aveludado",
  },
  {
    id: "ap-egipcio",
    name: "Aplicação Efeito Egípcio",
    category: "cilios-aplicacao",
    price: 155.0,
    duration: 150,
    description: "Técnica em W que cria volume delicado e textura única com máxima durabilidade.",
    imageUrl: "/assets/lash_efeito_egipcio.jpg",
    tag: "Efeito W",
  },
  {
    id: "lash-lifting",
    name: "Lash Lifting & Nutrição",
    category: "tratamentos",
    price: 120.0,
    duration: 60,
    description: "Curvatura, alinhamento e hidratação profunda dos próprios cílios naturais. Perfeito para quem busca praticidade sem extensões.",
    imageUrl: "/assets/lash_lifting_natural.jpg",
    tag: "Sem Extensão",
  },

  // Sobrancelhas & Micropigmentação Avançada
  {
    id: "nanopigmentacao",
    name: "Nanopigmentação (Fio a Fio)",
    category: "sobrancelhas",
    price: 450.0,
    duration: 150,
    description: "Fios ultrafinos, delicados e hiper-realistas que se camuflam perfeitamente aos seus fios naturais. Durabilidade média de 6 a 12 meses.",
    imageUrl: "/assets/eyebrow_nanopigmentation.jpg",
    isPopular: true,
    tag: "Hiper-Realista",
  },
  {
    id: "shadow-brows",
    name: "Shadow (Ombré Brows)",
    category: "sobrancelhas",
    price: 450.0,
    duration: 150,
    description: "Acabamento esfumado com degradê elegante. Preenche falhas e confere definição marcante. Durabilidade de 12 a 18 meses.",
    imageUrl: "/assets/eyebrow_shadow_ombre.jpg",
    tag: "Efeito Esfumado",
  },
  {
    id: "reconstrucao-ativos",
    name: "Reconstrução de Sobrancelhas com Ativos",
    category: "sobrancelhas",
    price: 450.0,
    duration: 60,
    description: "Tratamento profundo com ativos biomiméticos que estimulam o crescimento, fortalecem a raiz e recuperam o desenho natural.",
    imageUrl: "/assets/eyebrow_reconstruction.jpg",
    tag: "Terapia Capilar",
  },
  {
    id: "brow-lamination",
    name: "Brow Lamination",
    category: "sobrancelhas",
    price: 120.0,
    duration: 60,
    description: "Alinhamento e laminação dos fios rebeldes ou finos, proporcionando aspecto encorpado, volumoso e moderno.",
    imageUrl: "/assets/eyebrow_brow_lamination.jpg",
    tag: "Tendência",
  },
  {
    id: "design-henna",
    name: "Design com Henna",
    category: "sobrancelhas",
    price: 48.0,
    duration: 60,
    description: "Mapeamento facial com paquímetro, pinçamento preciso e aplicação de henna de alta performance com efeito sombreado natural.",
    imageUrl: "/assets/eyebrow_shadow_ombre.jpg",
  },
  {
    id: "design-sem-henna",
    name: "Design Personalizado (sem Henna)",
    category: "sobrancelhas",
    price: 37.0,
    duration: 30,
    description: "Mapeamento geométrico e limpeza minuciosa respeitando o formato natural do seu rosto.",
    imageUrl: "/assets/eyebrow_nanopigmentation.jpg",
  },
  {
    id: "buco",
    name: "Epilação de Buço",
    category: "tratamentos",
    price: 17.0,
    duration: 30,
    description: "Epilação delicada com cera fria hipoalergênica, ideal para peles sensíveis.",
    imageUrl: "/assets/epilacao_buco.jpg",
    tag: "Pele Sensível",
  },
  {
    id: "remocao-quimica",
    name: "Remoção Química Segura de Cílios",
    category: "tratamentos",
    price: 49.0,
    duration: 60,
    description: "Remoção profissional sem dor e sem tração, preservando 100% da integridade dos seus fios naturais.",
    imageUrl: "/assets/remocao_cilios.jpg",
    tag: "Proteção Total",
  },

  // Linha Mega Volume (> 30 dias)
  {
    id: "mega-brasileiro",
    name: "Mega Brasileiro (Durabilidade > 30 dias)",
    category: "cilios-mega",
    price: 200.0,
    duration: 180,
    description: "Técnica de alta densidade sem necessidade de manutenção intermediária. Durabilidade superior a 30 dias.",
    imageUrl: "/assets/lash_volume_brasileiro.jpg",
    isPopular: true,
    tag: "Retenção Máxima",
  },
  {
    id: "mega-arabe",
    name: "Mega Árabe",
    category: "cilios-mega",
    price: 215.0,
    duration: 180,
    description: "Volume mega expressivo com retenção máxima e acabamento aveludado impecável.",
    imageUrl: "/assets/lash_efeito_arabe.jpg",
  },
  {
    id: "mega-egipcio",
    name: "Mega Egípcio",
    category: "cilios-mega",
    price: 215.0,
    duration: 180,
    description: "Densidade máxima com técnica multidimensional e conforto extraordinário.",
    imageUrl: "/assets/lash_efeito_egipcio.jpg",
  },
  {
    id: "mega-fox",
    name: "Mega Fox Eyes",
    category: "cilios-mega",
    price: 225.0,
    duration: 180,
    description: "O impacto do olhar felino com densidade máxima e retenção ultra duradoura.",
    imageUrl: "/assets/lash_fox_eyes.jpg",
  },
  {
    id: "mega-ingles",
    name: "Mega Inglês",
    category: "cilios-mega",
    price: 225.0,
    duration: 180,
    description: "A sofisticação britânica com volume pleno e curvatura personalizada.",
    imageUrl: "/assets/lash_efeito_ingles.jpg",
  },

  // Cílios - Manutenções (até 20 dias)
  {
    id: "manut-brasileiro",
    name: "Manutenção Brasileiro (até 20 dias)",
    category: "cilios-manutencao",
    price: 115.0,
    duration: 120,
    description: "Higienização profunda, remoção de fios crescidos e preenchimento completo para renovar o efeito.",
    imageUrl: "/assets/lash_volume_brasileiro.jpg",
  },
  {
    id: "manut-fox",
    name: "Manutenção Fox Eyes",
    category: "cilios-manutencao",
    price: 125.0,
    duration: 120,
    description: "Manutenção técnica para preservar o efeito delineado e alongado com perfeição.",
    imageUrl: "/assets/lash_fox_eyes.jpg",
  },
  {
    id: "manut-arabe",
    name: "Manutenção Efeito Árabe",
    category: "cilios-manutencao",
    price: 120.0,
    duration: 120,
    description: "Renovação do efeito aveludado com alinhamento e preenchimento milimétrico.",
    imageUrl: "/assets/lash_efeito_arabe.jpg",
  },
  {
    id: "manut-egipcio",
    name: "Manutenção Efeito Egípcio",
    category: "cilios-manutencao",
    price: 120.0,
    duration: 120,
    description: "Reposição dos fios em W com protocolo de alta retenção.",
    imageUrl: "/assets/lash_efeito_egipcio.jpg",
  },
  {
    id: "manut-ingles",
    name: "Manutenção Efeito Inglês",
    category: "cilios-manutencao",
    price: 125.0,
    duration: 120,
    description: "Ajuste e renovação da curvatura e volume para manter a sofisticação do olhar.",
    imageUrl: "/assets/lash_efeito_ingles.jpg",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Camila Rodrigues",
    service: "Extensão Fox Eyes",
    rating: 5,
    comment: "A Kethlyn é simplesmente maravilhosa! Meus cílios duraram mais de 25 dias intactos e não pesaram nada nos olhos. Todo mundo elogia o efeito natural e lindo!",
    date: "Avaliação Google",
    avatarUrl: "/assets/avatar_1.jpg",
    verified: true,
  },
  {
    id: "t2",
    name: "Juliana Mendes",
    service: "Nanopigmentação & Brow Lamination",
    rating: 5,
    comment: "Eu tinha muito medo de fazer sobrancelha e ficar artificial, mas o trabalho da Kethlyn foi impecável. Os fios ficaram hiper delicados e meu rosto rejuvenesceu.",
    date: "Avaliação Google",
    avatarUrl: "/assets/avatar_2.jpg",
    verified: true,
  },
  {
    id: "t3",
    name: "Beatriz Oliveira",
    service: "Volume Brasileiro",
    rating: 5,
    comment: "O estúdio é super acolhedor e cheiroso, a gente relaxa tanto que dorme na maca. Não troco a Kethlyn por ninguém em Caieiras!",
    date: "Avaliação Google",
    avatarUrl: "/assets/avatar_3.jpg",
    verified: true,
  },
  {
    id: "t4",
    name: "Larissa Santos",
    service: "Mega Brasileiro",
    rating: 5,
    comment: "Fiz o Mega para viajar e passei mais de um mês com o olhar perfeito na praia e piscina, sem precisar me preocupar com rímel. Retenção incrível!",
    date: "Avaliação Google",
    avatarUrl: "/assets/avatar_4.jpg",
    verified: true,
  },
];

export const faqData: FAQItem[] = [
  {
    question: "A extensão de cílios danifica os fios naturais?",
    answer: "Não! Trabalhamos com a técnica de isolamento cirúrgico de 1 fio sintético por 1 fio natural, respeitando o peso e o ciclo de crescimento dos seus pelos. Seus cílios continuam saudáveis e renovando normalmente.",
  },
  {
    question: "Quanto tempo dura a extensão de cílios?",
    answer: "Nas aplicações tradicionais (Brasileiro, Fox Eyes, Inglês, Árabe), é recomendada a manutenção entre 15 e 20 dias. Na linha Mega Volume, a durabilidade pode ultrapassar 30 dias com os devidos cuidados diários.",
  },
  {
    question: "Quais os cuidados necessários após a aplicação?",
    answer: "Evitar molhar nas primeiras 24 horas, não usar produtos à base de óleo na região dos olhos, higienizar diariamente com espuma neutra e pentear delicadamente com a escovinha que fornecemos.",
  },
  {
    question: "Qual a diferença entre Nanopigmentação e Sobrancelha Definitiva?",
    answer: "A Nanopigmentação é superficial e trabalha na primeira camada da derme, desenhando fios ultrafinos que acompanham o caimento natural. Não fica escura nem azulada com o tempo, tendo durabilidade de 6 a 12 meses.",
  },
  {
    question: "Como funciona o agendamento online?",
    answer: "Você pode clicar no botão de 'Agendar Horário Online' para ver todos os dias e horários livres no nosso sistema MinhaAgenda ou nos chamar diretamente no WhatsApp para tirar dúvidas e escolher o melhor procedimento.",
  },
];
