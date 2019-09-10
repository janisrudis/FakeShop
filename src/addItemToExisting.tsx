import { ShopItem } from "./stock";


export default function addItemToExisting(
    item: ShopItem,
    existingItems: ShopItem[]
  ): ShopItem[] {

     const localItem = existingItems.find(i => item.name === i.name);
    // item.available=item.available
    if (item.available > 0 ) {


      if(localItem){
        console.log('correct');
       existingItems.map(i => i === localItem ? 
          {...localItem, available: localItem.available=localItem.available-1} : i);
      } else {
        item.available--;
      };
  
  
      if(localItem){
        console.log('correct');
       existingItems.map(i => i === localItem ? 
          {...localItem, sum: localItem.sum=localItem.sum+localItem.price} : i);
      } else {
      item.sum = item.sum + item.price;
      };


      if(localItem){
        console.log('correct');
       existingItems.map(i => i === localItem ? 
          {...localItem, quantity: localItem.quantity=localItem.quantity+1} : i);
      } else {
      item.quantity++;
      };
  
      console.log(item.quantity);
      if (!existingItems.find(i => item.name === i.name)) {
        item.quantity = 1;
        item.sum = item.price;
        existingItems.push(item);
      }
      outOfStock = false;
      return existingItems
    } else if (item.available === 0) {
      outOfStock = true;
      return existingItems
    }
    return existingItems
  }

  export let outOfStock = false;