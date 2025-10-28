const chefs = [
    {
        id: 'ana-souza',
        nome: 'Ana Souza',
        avatarLabel: 'AS',
        avatarImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687',
        bio: 'Especialista em culinária saudável e pratos vegetarianos.'
    },
    {
        id: 'marcos-l',
        nome: 'Marcos L.',
        avatarLabel: 'ML',
        avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687',
        avatarColor: '#c2410c',
        bio: 'Mestre das massas e apaixonado pela autêntica cozinha italiana.'
    },
    {
        id: 'julia-costa',
        nome: 'Julia Costa',
        avatarLabel: 'JC',
        avatarImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761',
        avatarColor: '#ca8a04',
        bio: 'Nossa confeiteira de mão cheia, especialista em doces e sobremesas.'
    }
];

const recipes = [
    {
        id: 'salada-verao',
        titulo: 'Salada Fresca de Verão',
        imagens: [
            'assets/img/salada-verao/1.jpg', 
            'assets/img/salada-verao/2.jpg',
            'assets/img/salada-verao/3.jpg'
        ],
        descricao: 'Uma salada leve e refrescante, perfeita para os dias quentes.',
        chefId: 'ana-souza', 
        dificuldade: 'Fácil',
        tempo: '15 min',
        rating: 4.5,
        avaliacoes: 23,
        ingredientes: [ '200g de mix de folhas', '1 xícara de tomates cereja', '1 xícara de azeitonas pretas picadas', '1/2 pepino japonês', '1/4 de cebola roxa', '50g de queijo feta', 'Azeite, sal e pimenta' ],
        preparo: [ 'Misture todos os ingredientes em uma saladeira grande.', 'Tempere com azeite, sal e pimenta a gosto pouco antes de servir.' ],
        dica: 'Para uma salada ainda mais crocante, deixe as folhas de molho em água gelada por 10 minutos antes de montar o prato.'
    },
    {
        id: 'panquecas-americanas',
        titulo: 'Panquecas Americanas',
        imagens: [
            'assets/img/panquecas-americanas/1.jpg',
            'assets/img/panquecas-americanas/2.jpg'
        ],
        descricao: 'A receita perfeita para um café da manhã de fim de semana inesquecível.',
        chefId: 'julia-costa', 
        dificuldade: 'Fácil',
        tempo: '25 min',
        rating: 4.8,
        avaliacoes: 41,
        ingredientes: [ '1 e 1/4 xícara de farinha de trigo', '1 colher de sopa de açúcar', '2 colheres de chá de fermento', '1 ovo', '1 xícara de leite', '2 colheres de manteiga derretida' ],
        preparo: [ 'Misture os ingredientes secos.', 'Misture os ingredientes líquidos.', 'Incorpore os líquidos nos secos sem mexer demais.', 'Cozinhe porções da massa em uma frigideira untada.' ],
        dica: 'O segredo para panquecas fofinhas é não misturar a massa em excesso. Algumas pequenas bolinhas de farinha são normais e garantem a leveza.'
    },
    {
        id: 'pizza-margherita',
        titulo: 'Pizza Margherita Caseira',
        imagens: [
            'assets/img/pizza-margherita/1.jpg',
            'assets/img/pizza-margherita/2.jpg',
            'assets/img/pizza-margherita/3.jpg'
        ],
        descricao: 'Aprenda a fazer a clássica pizza italiana com ingredientes simples.',
        chefId: 'marcos-l', 
        dificuldade: 'Médio',
        tempo: '90 min',
        rating: 5,
        avaliacoes: 58,
        ingredientes: [ '1 disco de massa de pizza', '1/2 xícara de molho de tomate', '150g de muçarela de búfala', 'Folhas de manjericão fresco', 'Azeite extra virgem' ],
        preparo: [ 'Pré-aqueça o forno a 220°C.', 'Espalhe o molho e a muçarela sobre a massa.', 'Asse por 10-15 minutos.', 'Finalize com o manjericão fresco.' ],
        dica: 'O segredo de uma Margherita perfeita é usar ingredientes de altíssima qualidade. Não economize no molho de tomate e na muçarela de búfala!'
    },
    {
        id: 'mousse-maracuja',
        titulo: 'Mousse de Maracujá Rápido',
        imagens: [
            'assets/img/mousse-maracuja/1.jpg',
            'assets/img/mousse-maracuja/2.jpg',
            'assets/img/mousse-maracuja/3.jpg'
        ],
        descricao: 'Uma sobremesa aerada, cremosa e com o equilíbrio perfeito entre doce e azedo.',
        chefId: 'julia-costa', 
        dificuldade: 'Muito Fácil',
        tempo: '15 min',
        rating: 4.8,
        avaliacoes: 77,
        ingredientes: [ '1 lata de leite condensado', '1 lata de creme de leite', 'A mesma medida (da lata) de suco de maracujá concentrado' ],
        preparo: [ 'Bata todos os ingredientes no liquidificador por 3 a 5 minutos.', 'Despeje em uma travessa ou em taças individuais.', 'Leve à geladeira por pelo menos 2 horas antes de servir.' ],
        dica: 'Para uma mousse mais aerada, bata o creme de leite (bem gelado) separadamente até ficar fofo e incorpore delicadamente ao final.'
    },
    {
        id: 'lasanha-bolonhesa',
        titulo: 'Lasanha à Bolonhesa',
        imagens: [
            'assets/img/lasanha-bolonhesa/1.jpg',
            'assets/img/lasanha-bolonhesa/2.jpg',
            'assets/img/lasanha-bolonhesa/3.jpg'
        ],
        descricao: 'Camadas de massa, molho rico e um cremoso molho bechamel.',
        chefId: 'marcos-l', 
        dificuldade: 'Médio',
        tempo: '120 min',
        rating: 4.9,
        avaliacoes: 102,
        ingredientes: [ '250g de massa para lasanha', '500g de carne moída', '1 lata de tomate pelado', 'Molho bechamel', 'Queijo muçarela e parmesão' ],
        preparo: [ 'Prepare um molho à bolonhesa refogando a carne e cozinhando com o tomate.', 'Prepare o molho bechamel.', 'Monte a lasanha alternando camadas de molho bolonhesa, massa, molho bechamel e queijos.', 'Asse até dourar.' ],
        dica: 'Deixe a lasanha descansar por pelo menos 15 minutos após sair do forno. Isso ajuda as camadas a se firmarem e facilita na hora de cortar.'
    },
    {
        id: 'frango-assado-ervas',
        titulo: 'Frango Assado com Ervas',
        imagens: [
            'assets/img/frango-assado-ervas/1.jpg', 
            'assets/img/frango-assado-ervas/2.jpg'
        ],
        descricao: 'Um prato suculento e aromático que conforta e agrada a todos.',
        chefId: 'marcos-l', 
        dificuldade: 'Fácil',
        tempo: '75 min',
        rating: 4.6,
        avaliacoes: 45,
        ingredientes: [ '1 frango inteiro (aprox. 1.5kg)', 'Ervas frescas (alecrim, tomilho)', '4 dentes de alho', '2 limões sicilianos', 'Azeite, sal e pimenta' ],
        preparo: [ 'Tempere o frango por dentro e por fora com sal, pimenta, alho e ervas.', 'Recheie a cavidade com os limões cortados.', 'Regue com azeite e asse a 200°C por cerca de 1 hora e 15 minutos.' ],
        dica: 'Para uma pele extra crocante, seque muito bem o frango com papel toalha e passe um pouco de manteiga por baixo da pele do peito antes de assar.'
    },
    {
        id: 'risoto-cogumelos',
        titulo: 'Risoto Cremoso de Cogumelos',
        imagens: ['assets/img/risoto-cogumelos/1.jpg'],
        descricao: 'Um prato italiano clássico, elegante e cheio de sabor umami.',
        chefId: 'ana-souza', 
        dificuldade: 'Médio',
        tempo: '35 min',
        rating: 4.9,
        avaliacoes: 62,
        ingredientes: [ '1 xícara de arroz arbóreo', '200g de cogumelos frescos (Paris, Portobello)', '1/2 xícara de vinho branco seco', '1 litro de caldo de legumes quente', 'Queijo parmesão ralado', 'Manteiga e azeite' ],
        preparo: [ 'Refogue os cogumelos e reserve.', 'Na mesma panela, refogue a cebola e adicione o arroz.', 'Adicione o vinho e deixe evaporar.', 'Vá adicionando o caldo quente, concha por concha, mexendo sempre.', 'Quando o arroz estiver al dente, incorpore os cogumelos, a manteiga e o parmesão.' ],
        dica: 'Nunca pare de mexer o risoto! O movimento constante ajuda a liberar o amido do arroz, o que garante a cremosidade característica do prato.'
    },
    {
        id: 'sopa-lentilha',
        titulo: 'Sopa de Lentilha Nutritiva',
        imagens: ['assets/img/sopa-lentilha/1.jpg'],
        descricao: 'Uma sopa vegana rica em proteínas e sabor, perfeita para aquecer.',
        chefId: 'ana-souza', 
        dificuldade: 'Fácil',
        tempo: '40 min',
        rating: 4.7,
        avaliacoes: 35,
        ingredientes: [ '1 xícara de lentilhas', '1 cebola picada', '2 cenouras em cubos', '2 dentes de alho', '1 litro de caldo de legumes', 'Sal e cominho a gosto' ],
        preparo: [ 'Refogue a cebola, o alho e a cenoura.', 'Adicione as lentilhas e o caldo de legumes.', 'Cozinhe em fogo baixo até as lentilhas ficarem macias.', 'Tempere e sirva quente.' ],
        dica: 'Para um sabor mais profundo e defumado, adicione uma colher de chá de páprica defumada junto com os outros temperos.'
    },
    {
        id: 'brownie-chocolate',
        titulo: 'Brownie de Chocolate Intenso',
        imagens: [
            'assets/img/brownie-chocolate/1.jpg',
            'assets/img/brownie-chocolate/2.jpg'
        ],
        descricao: 'Com uma casquinha crocante e um interior úmido e chocolatudo.',
        chefId: 'julia-costa', 
        dificuldade: 'Fácil',
        tempo: '50 min',
        rating: 5.0,
        avaliacoes: 89,
        ingredientes: [ '200g de chocolate meio amargo', '100g de manteiga', '3/4 xícara de açúcar', '2 ovos', '1/2 xícara de farinha de trigo', 'Nozes picadas (opcional)' ],
        preparo: [ 'Derreta o chocolate com a manteiga.', 'Misture o açúcar e os ovos.', 'Incorpore a farinha (e as nozes) sem bater muito.', 'Asse em forno pré-aquecido a 180°C por cerca de 30 minutos.' ],
        dica: 'Para obter aquela casquinha brilhante e craquelada, certifique-se de que o açúcar esteja bem dissolvido na mistura de ovos e manteiga.'
    }
];