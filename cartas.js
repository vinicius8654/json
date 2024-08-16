//Criatura Artefato
function exibirdados(){
const cartas =[
    {
        "nome":"Revenant de Argila",
        "custo":"1",
        "tipo":"Criatura Artefato — Golem",
        "poder":"1 / 2",
        "habilidade": {
            "descrição":"Devolva Clay Revenant do seu cemitério para sua mão.",
            "valor mana":"2",
        },
    },
    {
        "nome":"Observador Thopter",
        "custo":"8",
        "tipo":"Criatura Artefato — Tóptero",
        "poder":"4 / 5",
        "habilidade": {
            "descrição":"vôo Quando o Observador Thopter entrar, use a vidência X, onde X é seu poder.PRT-Protótipo_Mecânico//3 Azul Protótipo Você pode conjurar esta magia com custo de mana, cor e tamanho diferentes. Ela mantém suas habilidades e tipos 2/3",
            "valor mana":"8",
        },
    },
    {
        "nome":"Correio de Combate",
        "custo":"1",
        "tipo":"Criatura Artefato — Construir",
        "poder":"1 / 1",
        "habilidade": {
            "descrição":"2, Sacrifique Combat Courier: Compre um card. Desenterrar Azul ( Azul: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Desenterrar somente como um feitiço.)",
            "valor mana":"1",
        },
    },
    {
        "nome":"Quebra-mentes Terisiano",
        "custo":"7",
        "tipo":"Criatura Artefato — Juggernaut",
        "poder":"6 / 4",
        "habilidade": {

            "descrição":"Sempre que Terisian Mindbreaker ataca, o jogador defensor mói metade de sua biblioteca, arredondada para cima. Desenterrar 1AzulAzulAzul ( 1AzulAzulAzul: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Desenterrar somente como um feitiço.)",
            "valor mana":"7",
        },
    },
    {
        "nome":"Colheitadeira de Ashnod",
        "custo":"2",
        "tipo":"Criatura Artefato — Construir",
        "poder":"3 / 1",
        "habilidade": {

            "descrição":"Toda vez que o Colhedor de Ashnod atacar, exile o card alvo de um cemitério. Desenterrar 1Preto ( 1Preto: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Desenterrar somente como um feitiço.)",
            "valor mana":"2",
        },
    },
    {
        "nome":"Balista do Terror",
        "custo":"7",
        "tipo":"Criatura Artefato — Construir",
        "poder":"5 / 3",
        "habilidade": {

            "descrição":"AmeaçaSempre que Terror Ballista atacar, você pode sacrificar outra criatura. Quando fizer isso, destrua a criatura alvo que um oponente controla. Desenterrar 3PretoPreto ( 3PretoPreto: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Desenterrar somente como um feitiço.)",
            "valor mana":"7",
        },
    },
    {
        "nome":"Scrapwork Rager",
        "custo":"4",
        "tipo":"Criatura Artefato — Horror Phyrexiano",
        "poder":"2 / 2",
        "habilidade": {

            "descrição":"Quando Scrapwork Rager entra, você compra uma carta e perde 1 ponto de vida. Desenterrar 3Preto ( 3Preto: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Desenterrar somente como um feitiço.)",
            "valor mana":"4",
        },
    },
    //criatura
    {
        "nome":"Mecânico Thopter",
        "custo":"1",
        "tipo":"Criatura — Artífice Humano",
        "poder":"2 / 1",
        "habilidade": {

            "descrição":"Toda vez que você comprar seu segundo card a cada turno, coloque um marcador +1/+1 em Mecânico Thopter. Quando o Mecânico Thopter morrer, crie uma ficha de criatura artefato Thopter incolor 1/1 com voar.",
            "valor mana":"2",
        },
    },
    {
        "nome":"Gigamole Voraz",
        "custo":"3",
        "tipo":"Criatura — Toupeira Horror",
        "poder":"2 / 3",
        "habilidade": {

            "descrição":"Quando Ravenous Gigamole entrar, triture três cards. Você pode colocar um card de criatura dentre os cards triturados dessa forma na sua mão. Se não o fizer, coloque um marcador +1/+1 em Ravenous Gigamole. (Para triturar um card, coloque o card do topo do seu grimório no seu cemitério.)",
            "valor mana":"4",
        },
    },
    {
        "nome":"Acrobata da Zona de Morte",
        "custo":"2",
        "tipo":"Criatura — Soldado Humano",
        "poder":"3 / 2",
        "habilidade": {

            "descrição":"Toda vez que Kill-Zone Acrobat atacar, você pode sacrificar outra criatura ou artefato. Se fizer isso, Kill-Zone Acrobat ganha voar até o final do turno.",
            "valor mana":"3",
        },
    },
    {
        "nome":"Traxodemônio",
        "custo":"1",
        "tipo":"Criatura — Demônio",
        "poder":"2 / 2",
        "habilidade": {

            "descrição":"Sacrifique outra criatura ou artefato: Compre um card.",
            "valor mana":"2",
        },
    },
    {
        "nome":"Urza, Prodígio da Pedra de Energia",
        "custo":"2",
        "tipo":"Criatura Lendária — Artífice Humano",
        "poder":"1 / 3",
        "habilidade": {

            "descrição":"Compre uma carta e descarte uma carta. Sempre que você descartar um ou mais cards de artefato  crie um token de Powerstone virado. Esta habilidade é ativada apenas uma vez a cada turno. O token é um artefato com Tocar: Adicionar Incolor. Este mana não pode ser gasto para conjurar uma mágica que não seja artefato." ,
            "valor mana":"3",
        },
    },
    {
        "nome":"Trceiro Caminho Savant",
        "custo":"2",
        "tipo":"Criatura — Mago Humano",
        "poder":"2 / 3",
        "habilidade": {

            "descrição":"Quando o exército de Mishra caiu sobre a cidade de Terisia, Corlo sentiu sua concentração, sua paciência e sua força de vontade se entrelaçarem. E, respirando fundo, ele achou respostas no ar.",
            "valor mana":"3",
        },
    },
    {
        "nome":"Koilos Roc",
        "custo":"4",
        "tipo":"Criatura — Pássaro",
        "poder":"3 / 3",
        "habilidade": {

            "descrição":"Vôo Quando Koilos Roc entrar, crie uma ficha de Pedra de Energia virada. (É um artefato com Tocar: Adicionar Incolor. Este mana não pode ser gasto para conjurar uma magia que não seja artefato.",
            "valor mana":"5",
        },
    },
    {
        "nome":"Entusiasta de Geologia",
        "custo":"3",
        "tipo":"Criatura — Artífice Humano",
        "poder":"2 / 5",
        "habilidade": {

            "descrição":"No início da sua etapa final, crie uma ficha de Pedra de Energia virada. É um artefato com Tocar: Adicionar Incolor. Este mana não pode ser gasto para conjurar uma magia que não seja artefato.6: Compre um card e coloque um marcador +1/+1 em Entusiasta de Geologia.",
            "valor mana":"5",
        },
    },
    //feitiço
    {
        "nome":"Ninguém fica para trás",
        "custo":"4",
        "tipo":"Feitiçaria",
        "habilidade": {

            "descrição":"Esta magia custa 3menos para ser conjurada se tiver como alvo um card de criatura com valor de mana 3 ou menos. Retorne o card de criatura alvo do seu cemitério para o campo de batalha",
            "valor mana":"5",
        },
    },
    {
        "nome":"Realização macabra",
        "custo":"1",
        "tipo":"Feitiçaria",
        "habilidade": {

            "descrição":"Escolha um — • Você compra duas cartas e perde 2 pontos de vida. • As criaturas controladas pelos seus oponentes recebem -1/-1 até o final do turno.",
            "valor mana":"3",
        },
    },
    {
        "nome":"Comando de Gix",
        "custo":"3",
        "tipo":"Feitiçaria",
        "habilidade": {

            "descrição":"Escolha dois —• Coloque dois marcadores +1/+1 em até uma criatura. Ela ganha vínculo com a vida até o final do turno. • Destrua cada criatura com poder 2 ou menos.•  Retorne até dois cards de criatura do seu cemitério para sua mão. • Cada oponente sacrifica uma criatura com o maior poder entre as criaturas que ele controla.",
            "valor mana":"5",
        },
    },
    //encantamento
    {
        "nome":"Voe",
        "custo":"3",
        "tipo":"Encantamento — Aura",
        "habilidade": {
            "descrição":"Encantar criatura A criatura encantada recebe +1/+0 e tem voar e Toda vez que esta criatura atacar, compre um card.",
            "valor mana":"4",
        },
    },
    {
        "nome":"Subjugação de Weakstone",
        "custo":"Azul",
        "tipo":"Encantamento — Aura",
        "habilidade": {

            "descrição":"Encantar artefato ou criatura Quando Subjugação de Weakstone entra, você pode pagar 3. Se fizer isso, vire permanente encantada. O permanente encantado não é desvirado durante a etapa de desvirar do seu controlador.",
            "valor mana":"1",
        },
    },
    //instante
    {
        "nome":"Lição Stern",
        "custo":"2",
        "tipo":"Instant",
        "poder":"",
        "habilidade": {

            "descrição":"Compre dois cards e descarte um card. Crie uma ficha de Powerstone virada. (É um artefato com Tocar: Adicionar Incolor. Este mana não pode ser gasto para conjurar uma mágica que não seja artefato.",
            "valor mana":"3",
        },
    },
    {
        "nome":"Rejeição de Urza",
        "custo":"1AzulAzul",
        "tipo":"Instant",
        "poder":"",
        "habilidade": {

            "descrição":"Escolha um —• Contra-ataque à magia alvo.• Toque em até duas criaturas alvo.",
            "valor mana":"3",
        },
    },
    {
        "nome":"Intervenção de Ashnod",
        "custo":"Preto",
        "tipo":"Instant",
        "poder":"",
        "habilidade": {

            "descrição":"Até o final do turno, a criatura alvo recebe +2/+0 e ganha Quando esta criatura morrer ou for exilada do campo de batalha, devolva-a para a mão de seu dono.",
            "valor mana":"1",
        },
    },
    //terreno
    {
        "nome":"ilha",
        "terreno":"Terra Básica — Ilha",
        "Quantidade":"8"
    },
    {"nome":"Pântano",
        "terreno":"Terreno Básico — Pântano",
        "Quantidade":"8"
    }
    
]; 

    console.clear();
console.log(cartas);
console.log(cartas[0]);
console.log(cartas[1]);
}