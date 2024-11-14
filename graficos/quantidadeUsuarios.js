async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/comunicacao/comunicacao-dados-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const chave = Object.keys(dados)
    const valor = Object.values(dados)

    const data = [
        {
            x: chave, 
            y: valor, 
            type: 'bar'
        }
    ]   

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadeUsuariosPorRede()