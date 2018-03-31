export default function(context) {
  // go tell the store to update the page
  console.log('here')
  context.store.commit('updatePage', context.route.name)
}
