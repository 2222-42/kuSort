# kuSort

くソート(kuSort)

[KusoKoudoKaigi 第4回](https://docs.google.com/presentation/d/1gIa9l3XxOmi_2Q_FrWndeoFt9_-WBgtt6PRaoY0y-hM/edit#slide=id.gd466d2923a_1_102)で優勝しました。

## コードの説明

複数人数間で並行して同じタスクに取り掛かり、かつ、それぞれが異なる手法を使ってやる、ということは現実社会で時々見かけるけれど、それを壊れない感じでやろうとするととても大変。

では、ソートについて、並行して、異なる手法でやろうとするとどうなるか、ということに挑戦してみた。
  
### 補足

- TSなのにほぼJSな感じにするのも頑張りました。
- クイックソートくらいしっかりしているアルゴリズムに関して、私の能力ではクソコードで実装することができなかった。
- ダブルチェックをやれ、というのがよく見かけるから、各アルゴリズム同士で分担したり、他のアルゴリズムの結果を信用してスキップするということはしない。
