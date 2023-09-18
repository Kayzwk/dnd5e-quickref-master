data_action = [
    {
        title: "Ataque",
        icon: "crossed-swords",
        subtitle: "Ataque corpo a corpo ou à distância",
        description: "Execute um ataque corpo a corpo ou à distância com sua arma",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certos recursos, como o recurso <i>Ataque Extra</i> do guerreiro, permitem que você faça mais de um ataque com esta ação. Cada um desses ataques é uma jogada separada e pode ter como alvo criaturas diferentes. Você pode se mover entre esses ataques.",
            "Quando você ataca com uma arma corpo a corpo leve, você pode usar uma ação bônus para atacar com a outra mão (veja a ação bônus <i>Ataque improvisado</i>).",
            "Você pode substituir um de seus ataques corpo a corpo por um <i>Agarrar</i> ou um <i>Empurrão</i>.",
            "Algumas condições dão vantagem no ataque: ataques contra alvos cegos, paralisados, petrificados, contidos, atordoados ou inconscientes; ataques corpo a corpo contra alvos caídos; ataques de atacantes invisíveis ou ocultos.",
            "Algumas condições dão desvantagem no ataque: ataques contra alvos invisíveis ou ocultos; ataques à distância contra alvos propensos; ataques de atacantes cegos, assustados, envenenados ou contidos."
        ]
    },
    {
        title: "Agarrar",
        icon: "grab",
        subtitle: "Ataque corpo a corpo especial",
        description: "Tentar agarrar uma criatura ou lutar com ela",
        reference: "PHB, pg. 195.",
        bullets: [
            "Você pode usar a ação <i>Atacar</i> para realizar um ataque corpo a corpo especial, um agarrar. Se você for capaz de realizar vários ataques com a ação Atacar, este ataque substitui um deles.",
            "O alvo do seu agarrar não deve ser maior que um tamanho maior que você e deve estar ao seu alcance.",
            "Usando pelo menos uma mão livre, você tenta agarrar o alvo fazendo um teste de agarrar, um teste de Força (Atletismo) contestado pelo teste de Força (Atletismo) ou Destreza (Acrobacia) do alvo (o alvo escolhe a habilidade a ser usada).",
            "Se tiver sucesso, você sujeita o alvo à condição agarrado (sua velocidade é definida como 0)."
        ]
    },
    {
        title: "Empurrar",
        icon: "hand",
        subtitle: "Ataque corpo a corpo especial",
        description: "Empurre uma criatura, seja para derrubá-la ou afastá-la de você",
        reference: "PHB, pg. 195.",
        bullets: [
            "Usando a ação <i>Atacar</i>, você pode realizar um ataque corpo a corpo especial para empurrar uma criatura. Se você for capaz de realizar vários ataques com a ação Atacar, este ataque substitui um deles.",
            "O alvo do seu empurrão não deve ser maior que um tamanho maior que você e deve estar ao seu alcance.",
            "Você faz um teste de Força (Atletismo) contestado pelo teste de Força (Atletismo) ou Destreza (Acrobacia) do alvo (o alvo escolhe a habilidade a ser usada).",
            "Se você vencer a disputa, você derruba o alvo ou o empurra a 1,5 metro de distância de você."
        ]
    },
    {
        title: "Lançar um feitiço",
        icon: "magic-swirl",
        subtitle: "Tempo de lançamento de 1 ação",
        description: "Lançar um feitiço com tempo de lançamento de 1 ação",
        reference: "PHB, pg. 192.",
        bullets: [
            "Você não pode conjurar uma magia com sua ação e uma magia diferente com sua ação bônus no mesmo turno, exceto se a ação for usada para conjurar um truque.",
            "O alvo de um feitiço deve estar dentro do alcance do feitiço. Para atingir algo, você deve ter um caminho claro até ele, para que não possa estar totalmente coberto.",
            "Feitiços com componentes materiais não consomem o material, a menos que seja explicitamente declarado. A menos que o custo de um material seja fornecido, você pode presumir que o custo é insignificante e que o material está simplesmente disponível em uma bolsa de componentes.",
            "Alguns feitiços exigem que você mantenha a concentração para manter sua magia ativa. Se você perder a concentração, esse feitiço termina. Você perde a concentração em uma magia se lançar outra magia que exija concentração ou quando estiver incapacitado. Cada vez que você sofre dano, você deve fazer um teste de resistência de Constituição para manter sua concentração. A CD é igual a 10 ou metade do dano que você sofre, o número que for maior."
        ]
    },
    {
        title: "Disparada",
        icon: "sprint",
        subtitle: "Dobre a velocidade de movimento",
        description: "Ganhe movimento extra para o turno atual",
        reference: "PHB, pg. 192.",
        bullets: [
            "O aumento é igual à sua velocidade, após aplicar quaisquer modificadores."
        ]
    },
    {
        title: "Desengajar",
        icon: "journey",
        subtitle: "Previna ataques de oportunidade",
        description: "Sua movimentação não provoca ataques de oportunidade pelo resto do seu turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumentar as defesas",
        description: "Concentre-se inteiramente em evitar ataques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Até o início do seu próximo turno, qualquer jogada de ataque feita contra você terá desvantagem se você puder ver o atacante e você fizer testes de resistência de Destreza com vantagem.",
            "Você perde esse benefício se estiver <i>incapacitado</i> ou se seu deslocamento cair para 0."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escape de um agarrão",
        description: "Escape de um agarrão",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar de uma luta agarrada, você deve ter sucesso em um teste de Força (Atletismo) ou Destreza (Acrobacia) contestado pelo teste de Força (Atletismo) do agarrador.",
            "Escapar de outras condições que o restringem (como algemas) pode exigir um teste de Destreza ou Força, conforme especificado pela condição."
        ]
    },
    {
        title: "Ajudar",
        icon: "telepathy",
        subtitle: "Conceda vantagem a um aliado",
        description: "Conceda vantagem a um aliado em um teste de habilidade ou ataque",
        reference: "PHB, pg. 192.",
        bullets: [
            "O alvo ganha vantagem no próximo teste de habilidade que fizer para realizar a tarefa que você está ajudando.",
            "Alternativamente, o alvo ganha vantagem na próxima jogada de ataque contra uma criatura a até 1,5 metro de você.",
            "A vantagem dura até o início do seu próximo turno."
        ]
    },
    {
        title: "Usar objeto",
        icon: "snatch",
        subtitle: "Interaja, use habilidades especiais",
        description: "Interaja com um segundo objeto ou use habilidades especiais de objeto",
        reference: "PHB, pg. 193.",
        bullets: [
            "Você pode interagir com um objeto gratuitamente durante o seu turno (como sacar uma arma ou abrir uma porta). Se você quiser interagir com um segundo objeto, use esta ação.",
            "Quando um objeto requer sua ação para ser usado, você também realiza esta ação."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar ou desequipar um escudo",
        description: "Equipar ou desequipar um escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Um escudo sempre realiza uma ação para equipar ou desequipar.",
            "A armadura leva vários minutos para ser equipada ou desequipada."
        ]
    },
    {
        title: "Esconder-se",
        icon: "hood",
        subtitle: "",
        description: "Tentar se esconder",
        reference: "PHB, pg. 192.",
        bullets: [
            "Você não pode se esconder de uma criatura que pode te ver. Você deve ter cobertura total, estar em uma área fortemente obscurecida, ser invisível ou bloquear a visão do inimigo.",
            "Se você fizer barulho (como gritar um aviso ou derrubar um vaso), você revela sua posição.",
            "Quando você tentar se esconder, faça um teste de Destreza (Furtividade) e anote o resultado. Até que você seja descoberto ou pare de se esconder, o total desse teste é contestado pelo teste de Sabedoria (Percepção) de qualquer criatura que procure ativamente por sinais de sua presença.",
            "Uma criatura percebe você mesmo que não esteja procurando, a menos que seu teste de Furtividade seja maior que sua Percepção Passiva.",
            "Fora de combate, você também pode usar um teste de Destreza (Furtividade) para atos como se esconder dos inimigos, passar furtivamente pelos guardas, escapar sem ser notado ou se aproximar furtivamente de alguém sem ser visto ou ouvido."
        ]
    },
    {
        title: "Procurar",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedique sua atenção para encontrar algo",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependendo da natureza da sua busca, o Mestre pode fazer com que você faça um teste de Sabedoria (Percepção) ou um teste de Inteligência (Investigação)."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Escolha o gatilho e a ação",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "Primeiro, você decide qual circunstância perceptível irá desencadear sua reação.",
            "Em seguida, você escolhe a ação que executará em resposta a esse gatilho ou escolhe aumentar sua velocidade em resposta a ele.",
            "Quando o gatilho ocorre, você pode reagir logo após o gatilho terminar ou ignorá-lo.",
            "Ao preparar um feitiço, você o lança normalmente, mas retém sua energia, que você libera com sua reação quando o gatilho ocorre. Para ser preparado, um feitiço deve ter um tempo de lançamento de 1 ação, e manter a magia do feitiço requer concentração."
        ]
    },
    {
        title: "Usar recurso de classe",
        icon: "embrassed-energy",
        subtitle: "Alguns recursos usam ações",
        description: "Use uma característica racial ou de classe que use uma ação",
        reference: "Consulte a página da classe para obter mais informações.",
        bullets: [

        ]
    },
    {
        title: "Estabilizar uma criatura",
        icon: "first-aid",
        subtitle: "Usar kit de primeiros socorros",
        description: "Impedir que uma criatura precise fazer testes de resistência à morte",
        reference: "PHB, pg. 197.",
        bullets: [
            "Faça um teste de Sabedoria (Medicina) com CD 10",
            "Com um sucesso, a criatura fica estável e não precisa mais fazer testes de resistência contra a morte.",
            "Uma criatura estável recupera 1 ponto de vida após 1d4 horas"
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Qualquer ação que não esteja nesta lista",
        description: "Execute qualquer ação que você possa imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quando você descreve uma ação não detalhada em outras partes das regras, o Mestre lhe diz se aquela ação é possível e que tipo de teste você precisa fazer, se houver, para determinar o sucesso ou o fracasso."
        ]
    }
]
