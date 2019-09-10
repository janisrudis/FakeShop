import { ShopItem } from "./stock";

export default function discountDeck(deck: ShopItem, existingItems: ShopItem[]) {

  const localItem = existingItems.find(i => deck.name === i.name);

  if(localItem){
    console.log('correct Discount');
    if (deck.name === "Outsider") {
      if (localItem.available === 0) {
        return;
      } else if (localItem.quantity % 3 === 0) {
        console.log("LOcal Discount apply 2FOR3");
        return (localItem.sum = localItem.sum - localItem.price);
      }

  } else {

    if (deck.name === "Outsider") {
      if (deck.available === 0) {
        return;
      } else if (deck.quantity % 3 === 0) {
        console.log("Discount apply 2FOR3");
        return (deck.sum = deck.sum - deck.price);
      }

    }
  }
  }
}