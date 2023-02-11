import React, { useState, useEffect } from "react";
import FilterPanel from "../Pages/SearchProduct/FilterPanel";
import SearchBar from "../Pages/SearchProduct/SearchBar";
import ListItem from "../Pages/SearchProduct/ListItem";
import { useRegisterPubStore } from "../Hooks/useRegisterPubStore";
import { SyncLoader } from "react-spinners";
import "./SearchPage.css";
import { Button } from "rsuite";

export default function SearchPage() {
  const { getPublications } = useRegisterPubStore();
  const [dataPublicationsStart, setDataPublicationsStart] = useState([]);
  const [dataPublications, setDataPublications] = useState(
    dataPublicationsStart
  );
  const [inputSearch, setInputSearch] = useState("");
  const [chequeoTieneValor, setChequeoTieneValor] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([50, 1500]);
  const [balnearios, setBalnearios] = useState([
    { id: 1, checked: false, label: "Piriapolis" },
    { id: 2, checked: false, label: "La Paloma" },
    { id: 3, checked: false, label: "La Esmeralda" },
    { id: 4, checked: false, label: "Valizas" },
    { id: 5, checked: false, label: "Santa Teresa" },
    { id: 6, checked: false, label: "Las Toscas" },
    { id: 7, checked: false, label: "La Coronilla" },
    { id: 8, checked: false, label: "Otro" },
  ]);

  const setPublications = async () => {
    await getPublications().then((item) => {
      setDataPublicationsStart(item.publicationsFromDB);
    });
    setChequeoTieneValor(true);
  };

  const applyFilters = () => {
    let updatedList = dataPublicationsStart;

    //Filtro de Tipo Propiedad
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.tipoPropiedad === selectedCategory
      );
    }

    //Filtro de Balnearios
    const checkBalnearios = balnearios
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (checkBalnearios.length) {
      updatedList = updatedList.filter((item) =>
        checkBalnearios.includes(item.balneario)
      );
    }

    //Filtro de Rango de Precios
    const precioMinimo = selectedPrice[0];
    const precioMaximo = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.pric1 >= precioMinimo && item.pric3 <= precioMaximo
    );

    //Filtro de Busqueda Titulo
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setDataPublications(updatedList);

    !updatedList.length
      ? setChequeoTieneValor(false)
      : setChequeoTieneValor(true);
  };

  useEffect(() => {
    setPublications();
    applyFilters();
  }, [dataPublicationsStart, selectedCategory, balnearios, inputSearch]);

  const handleSelectPropertyType = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const listaBalnearios = balnearios;
    const changeCheckedBalnearios = listaBalnearios.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setBalnearios(changeCheckedBalnearios);
  };

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const resetFilters = (e) => {
    e.preventDefault();
    setDataPublications(dataPublicationsStart);
    setSelectedCategory(null);
    setSelectedPrice([50, 1500]);
    setBalnearios([
      { id: 1, checked: false, label: "Piriapolis" },
      { id: 2, checked: false, label: "La Paloma" },
      { id: 3, checked: false, label: "La Esmeralda" },
      { id: 4, checked: false, label: "Valizas" },
      { id: 5, checked: false, label: "Santa Teresa" },
      { id: 6, checked: false, label: "Las Toscas" },
      { id: 7, checked: false, label: "La Coronilla" },
      { id: 8, checked: false, label: "Otro" },
    ]);
  };

  return (
    <div className="home">
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />

      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectPropertyType}
            balnearios={balnearios}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
          <Button className="boton-reset-filters" onClick={resetFilters}>
            Quitar Filtros
          </Button>
        </div>

        <div className="home_list-wrap">
          {chequeoTieneValor === false ? (
            <SyncLoader
              color={"#E08E45"}
              loading={true}
              size={40}
              margin={30}
              speedMultiplier={1}
              className="ringClass"
            />
          ) : (
            <ListItem dataPublications={dataPublications} />
          )}
        </div>
      </div>
    </div>
  );
}
