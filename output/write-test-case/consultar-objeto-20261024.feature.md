# Cenário Gherkin: consultar um objeto existente

- Fonte: CT001 em `tests/objects/get-objects.spec.ts`.
- Contexto: incompleto; cenário baseado no teste existente.
- Automação: CT002 em `tests/objects/get-objects-gherkin.spec.ts`, com passos em `test.step`.
- Ambiente: `https://api.restful-api.dev`.
- Prioridade: P2, consulta de objeto já coberta pela suíte, usada como exemplo de Gherkin.
- Convenção de esperado: validações em Então e E.
- Pré-condição: objeto com ID `7` disponível na API.
- Pós-condição: nenhuma alteração de dados; sem limpeza necessária.

```gherkin
# language: pt
Funcionalidade: Consulta de objetos

  Cenário: SC-01 Consultar um objeto existente pelo ID
    Dado que existe um objeto com o ID "7"
    Quando consulto esse objeto pelo ID
    Então a API deve retornar o status 200
    E deve retornar o ID "7", um nome preenchido e o campo data definido
```

Correspondência: Given = Dado; When = Quando; Then = Então; And = E.

O cenário acima documenta o comportamento. A execução usa os passos do Playwright em CT002; este Markdown não é interpretado por um runner Gherkin.
