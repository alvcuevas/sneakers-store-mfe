import { create } from 'zustand'
import sneakers from './sneakers.json'

enum Filter {
  Name = 'Name',
  Color = 'Color',
  Price = 'Price',
}

enum Price {
  Cheaper = 'Cheaper',
  Medium = 'Medium',
  Expensive = 'Expensive',
}

export interface Sneaker {
  id: number
  brand: string
  model: string
  price: number
  color: string
  image: string
}

interface SneakerStoreState {
  sneakers: Sneaker[]
  filteredSneakers: Sneaker[]
  cart: Sneaker[]
  searchText: string
  price: Price
  color: string
}

interface SneakerStoreActions {
  setSearchText: (searchText: string) => void
  setPrice: (price: Price) => void
  setColor: (color: string) => void
  addSneakerToCart: (sneaker: Sneaker) => void
  removeSneakerFromCart: (sneaker: Sneaker) => void
  filterSneakersBy: (filter: Filter) => Sneaker[]
  cleanCart: () => void
  cleanStore: () => void
}

const initialState: SneakerStoreState = {
  sneakers: [...sneakers],
  filteredSneakers: [],
  cart: [],
  searchText: '',
  price: '' as Price,
  color: '',
}

export const useSneakerStore = create<SneakerStoreState & SneakerStoreActions>(
  (set, get) => ({
    ...initialState,
    setSearchText: (searchText: string) => {
      const { filterSneakersBy } = get()
      set(() => ({ searchText }))
      set(() => ({ filteredSneakers: filterSneakersBy(Filter.Name) }))
    },
    setPrice: (price: Price) => {
      const { filterSneakersBy } = get()
      set(() => ({ price }))
      set(() => ({ filteredSneakers: filterSneakersBy(Filter.Price) }))
    },
    setColor: (color: string) => {
      const { filterSneakersBy } = get()
      set(() => ({ color }))
      set(() => ({ filteredSneakers: filterSneakersBy(Filter.Color) }))
    },
    addSneakerToCart: (sneaker: Sneaker) => {
      set((state) => ({ cart: [...state.cart, sneaker] }))
    },
    removeSneakerFromCart: (sneaker: Sneaker) => {
      const { cart } = get()
      set(() => ({
        cart: [...cart.filter((s) => s.id !== sneaker.id)],
      }))
    },
    filterSneakersBy: (filter: Filter) => {
      const { searchText, sneakers, price, color, filteredSneakers } = get()

      const sneakersList = !!filteredSneakers.length
        ? filteredSneakers
        : sneakers

      if (filter === Filter.Name) {
        const searchTextRegExp = new RegExp(searchText, 'i')

        return sneakersList.filter(
          (sneaker) =>
            sneaker.brand.match(searchTextRegExp) ||
            sneaker.model.match(searchTextRegExp)
        )
      }
      if (filter === Filter.Price) {
        const priceLimit: Record<Price, any> = {
          Cheaper: { min: 0, max: 100 },
          Medium: { min: 100, max: 150 },
          Expensive: { min: 150, max: 250 },
        }

        return sneakersList.filter(
          (sneaker) =>
            sneaker.price >= priceLimit[price].min &&
            sneaker.price <= priceLimit[price].max
        )
      }
      if (filter === Filter.Color) {
        return sneakersList.filter((sneaker) => sneaker.color === color)
      }

      return []
    },
    isSneakerOnCart: (sneaker: Sneaker) => get().cart.includes(sneaker),
    cleanCart: () => set(() => ({ cart: [] })),
    cleanStore: () => set(initialState),
    clearFilters: () => {
      set(() => ({
        searchText: '',
        color: '',
        price: '' as Price,
        filteredSneakers: [],
      }))
    },
  })
)
