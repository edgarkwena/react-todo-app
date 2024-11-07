export function Tabs({todoList, currentTab, setFilter}) {

    const tabCounts = {
        All: todoList.length,
        Open: todoList.filter((t) => !t.complete).length,
        Complete: todoList.filter((t) => t.complete).length,
    };
    return (
        <nav className="tab-container">
          { /* {
            tabs.map((tab, tabIndex) => {
                
                const count = tab === 'All'? todoList.length
                            : tab === 'Open' ? todoList.filter((t) => !t.complete).length
                            : todoList.filter((t) => t.complete).length;

                const displayFunc = tab === 'All'? allFunc
                                    : tab === 'Open'? openFunc
                                    : compFunc
                return (
                <button 
                key={tabIndex}
                className="tab-button"
                onClick={displayFunc}>
                    <h4>{tab} <span>({count})</span></h4>
                </button>
                )
            })  } */      
            ['All', 'Open', 'Complete'].map((tab, index) => 
                (
            <button 
                key={index}
                className={"tab-button " + (tab===currentTab? " tab-selected": " ") }
                onClick={() => setFilter(tab)}>

                <h4>{tab}<span>({tabCounts[tab]})</span></h4>

            </button>
             
            ))}
           <hr/>
        </nav>
            

          
    );
}