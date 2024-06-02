import NoResults from "./NoResults";

const CardsComponent = ({ data, uniqueKey }) => {
    return (
        <>
            {
                data.length === 0 ?
                    <NoResults />
                    :
                    <div key={uniqueKey} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data.map((item, index) => (
                        <div key={index}
                            className="p-6 bg-white border
                                border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800
                                dark:border-gray-700 dark:hover:bg-gray-700 fade-in">
                            <h2 className="text-lg font-bold">{item.id}</h2>
                            <p>{item.name}</p>
                        </div>
                        ))}
                    </div>
            }
        </>
    );
}

export default CardsComponent;