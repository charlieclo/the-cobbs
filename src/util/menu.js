export const menus = [
  {
    name: 'brekkie',
    displayTitle: 'Brekkie'
  },
  {
    name: 'boulangerie',
    displayTitle: 'Boulangerie'
  },
  {
    name: 'mains',
    displayTitle: 'Mains'
  },
  {
    name: 'desserts',
    displayTitle: 'Desserts'
  },
  {
    name: 'beverages',
    displayTitle: 'Beverages'
  }
]

export function initiateMenuData (data) {
  let menuData = new Object()

  menus.forEach((menu) => {
    menuData[menu.displayTitle] = new Object()
    menuData[menu.displayTitle].category = data[menu.name].categoryImage
    
    menuData[menu.displayTitle].products = []
    for (let i = 1; i <= 5; i++) {
      if (data[menu.name][`productImage${i}`] !== null) {
        menuData[menu.displayTitle].products.push(data[menu.name][`productImage${i}`])
      }
    }
  })

  return menuData
}