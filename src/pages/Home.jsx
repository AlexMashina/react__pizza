import React from 'react';
import { Categories, SortPopUp, Pizza, LoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [dispatch, sortBy, category])


  const onSelectCategory = React.useCallback( index => {
    dispatch(setCategory(index))
  }, [dispatch]);

  const onSelectSortType = React.useCallback( type => {
    dispatch(setSortBy(type))
  }, [dispatch]);

  const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc"  },
    { name: "алфавиту", type: "name", order: "asc"  }
  ]

  const addPizza = obj => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
        <SortPopUp activeSortType={sortBy.type} onClickSortType={onSelectSortType} items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading 
            ? items.map(obj => <Pizza addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} onClickAddPizza={addPizza} key={obj.id} isLoading={false}  {...obj} />)
          :  Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />) 
        }
      </div>
    </div>
  )
}

export default Home
