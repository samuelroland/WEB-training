// TODO: créer un composant Search, qui prend en props une fonction qui permet de mettre à jour l'état de la recherche plus haut dans la hiérarchie des composants.
export default function Search({ handleSearch }: { handleSearch: (_: string) => void }) {
    return (
        <div style={{ margin: '20px' }}>
            <label htmlFor="search" style={{ marginRight: '5px' }}>
                Search an emoji
            </label>
            <input id="search" onChange={(e) => handleSearch(e.target.value)}></input>
        </div>
    );
}
