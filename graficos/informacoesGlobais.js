const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/comunicacao/comunicacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_que_usam_meios_de_comunicacao / 1e9);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
    const horas = parseInt(dados.tempo_medio_dia_usando_meios_de_comunicacao);
    const minutos = Math.round((dados.tempo_medio_dia_usando_meios_de_comunicacao - horas)*60);
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span> ${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social e passam em média <span> ${horas} </span> horas e <span> ${minutos} minutos conectadas por dia.</span> <br> Isso significa que aproximadamente <span>${porcentagemConectada}%</span> pessoas conectada em alguma rede social.`
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()


