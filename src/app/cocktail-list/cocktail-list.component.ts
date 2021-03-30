import { Component, OnInit } from "@angular/core";
import { Cocktail } from "../interfaces/cocktail.interface";

@Component({
  selector: "app-cocktail-list",
  templateUrl: "./cocktail-list.component.html",
  styleUrls: ["./cocktail-list.component.scss"]
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: "Mojito",
      img:
        "https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375",
      description:
        "Le Mojito complète parfaitement l'été avec un goût de menthe fraîche. Le mélange de rhum blanc, de menthe, de jus de citron vert, de sucre et d'eau gazeuse est croustillant et propre avec une teneur en alcool relativement faible, l'eau gazeuse peut être remplacée par du sprite ou 7-up. Lors de la préparation d'un mojito, écrasez toujours les feuilles de menthe plutôt que de les couper en dés pour débloquer les huiles qui aideront à rehausser la saveur de menthe."
    },
    {
      name: "Cosmopolitan",
      img:
        "https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px",
      description:
        "La concoction acidulée de vodka, triple sec, jus de citron vert et jus de canneberge a réussi à dépasser le vénérable tournevis car de nombreux buveurs de vodka préfèrent le goût plus propre et légèrement acidulé du Cosmopolitan. Les clés de la préparation d'un Cosmopolitan sont une bonne marque de jus de canneberge et Cointreau Triple Sec, deux éléments essentiels à la boisson."
    },
    {
      name: "Mai Tai",
      img:
        "https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px",
      description:
        "Le Mai Tai est un cocktail de style polynésien qui a un goût tropical fruité sucré et vibrant. Le mélange de rhum clair et foncé, de curaçao orange, de sirop d'orgeat et de jus de citron vert est un symbole de la culture tahitienne depuis la création de la boisson."
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
