## Desafio 2

Em uma sala de aula, há vinte e cinco alunos.
Entre eles, existem os grupos dos que gostam de Português (P) e os que gostam de Matemática (M).
Eles são divididos conforme a ilustração 1 em anexo.

- Depois de um tempo, chegaram mais onze alunos nessa turma e o professor organizou-a conforme a ilustração 2 em anexo.

- No entanto, o professor se ausentou da sala por cinco minutos e, ao voltar, percebeu que um aluno que gosta de uma das disciplinas havia trocado de lugar com alguém que prefere a outra, e a turma ficou organizada conforme a ilustração 3 em anexo.

- Sabendo que o professor tem dificuldade de memorizar, informe como ele descobriu a cadeira em que houve a troca de alunos e qual a disciplina de cada um.

<details> 
  <summary>Clique para visualizar a resposta</summary>

### Resposta

Na sala com 25 alunos tínhamos 14 alunos que preferem M e 11 alunos que gostam de P.
Observando a sala como uma matriz, no primeiro instante temos uma matriz 5x5. Nesse modelo de 25 alunos, a sala estava organizada com o padrão de 3 alunos que preferem uma disciplina para 2 que gostam mais da outra, tanto em linha como em coluna, com exceção da terceira linha e terceira coluna.

Ao chegar os demais alunos, sendo 7 que gostam de P e 4 que preferem M, a organização da sala foi acrescido uma coluna e uma linha, sendo agora uma matriz 6x6.

Nesse modelo 2 ficou um total de 36 alunos, sendo 18 que prefere M e 18 que gostam de P, e a distribuição pode ficar padronizada em 3 para 2, tanto em coluna quanto em linha.

Ao sair da sala e depois retornar ele pode perceber que houve mudança nas posições S43 e S55 (onde S representa a matriz Sala, e o primeiro nº é referente a linha e o segundo representa o nº da coluna), porque observando as linhas 1, 2, 3 e 6 manteve o padrão de 3 para 2, e verificando as colunas 1, 2, 4 e 6 também o padrão 3 para 2 se manteve. Somente nas linhas 4 e 5 e colunas 3 e 5 que não estavam seguindo o padrão. Sendo assim possível determinar as posições dos dois alunos que mudaram de lugar sendo eles S43 (que prefere P)  mudou de lugar com S55 (que gosta de M).
