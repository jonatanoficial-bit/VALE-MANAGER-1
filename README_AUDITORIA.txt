VALE AIR MANAGER
Versão: v0.4.0-alpha
Build: 20260630-1600
Schema: 4
Fases entregues em modo acelerado: F1, F2, F3 e F4

OBJETIVO DA BUILD
- Iniciar o projeto no padrão Vale Games com ZIP completo.
- Entregar núcleo jogável, não apenas tela estática.
- Permitir criar companhia aérea, selecionar avatar/logo, hub, salvar carreira, comprar aeronaves, abrir rota e ver voos no mapa.

ENTREGUE
[OK] F1 Fundação
- HTML/CSS/JS organizados.
- Build, versão, data e schema visíveis no rodapé.
- Sistema anti-quebra global com captura de erros e tela de recuperação.
- Visual premium mobile-first.

[OK] F2 Save Slots
- 3 slots reais.
- Criar carreira em slot.
- Continuar carreira.
- Renomear companhia.
- Apagar slot.
- Proteção contra save quebrado/schema incompatível.

[OK] F3 Mapa Real
- Leaflet/OpenStreetMap via CDN quando online.
- Fallback SVG interno se Leaflet falhar.
- Aeroportos com IATA/ICAO/cidade/país/latitude/longitude/demanda/taxas.
- Hub inicial destacado.

[OK] F4 Frota e Primeira Rota
- Catálogo inicial de aeronaves.
- Compra de avião.
- Aeronave inicial na carreira.
- Cálculo de distância por coordenadas.
- Validação de alcance.
- Estimativa de receita, custo, lucro, combustível, manutenção e taxas.
- Rota cíclica com lucro/prejuízo e desgaste da aeronave.

ASSETS
- Assets genéricos em SVG para logos, avatares, aviões e equipe.
- Sem dependência de imagens protegidas.
- Próxima etapa: substituir por assets cinematográficos/ultrarrealistas próprios.

AUDITORIA INTERNA
- Botão Auditoria dentro do jogo.
- Checks: build visível, schema, save slots, aeroportos, aeronaves, localStorage, fluxo inicial, frota, rotas e fallback de mapa.

ANTI-QUEBRA
- try/catch por render/action/tick/map.
- window.onerror e unhandledrejection capturados.
- Registro local do último crash em localStorage.
- Recuperação para painel/auditoria sem popup bloqueando o jogo.

COMO TESTAR
1. Abrir index.html ou publicar no GitHub Pages.
2. Criar companhia.
3. Entrar em Rotas.
4. Escolher destino.
5. Conferir preview de lucro/alcance.
6. Criar rota.
7. Ir para Mapa e Finanças.
8. Comprar avião em Frota.
9. Abrir Auditoria.

PRÓXIMAS FASES RECOMENDADAS
v0.5.0 F5-F8: onboarding mais cinematográfico, hubs avançados, contratos iniciais e tutorial guiado.
v0.6.0 F9-F12: economia profunda, precificação dinâmica, combustível e manutenção expandida.
v0.7.0 F13-F16: relatórios financeiros, eventos econômicos e balanceamento de progressão.
