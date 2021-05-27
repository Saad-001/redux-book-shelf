import allBooks from '../../fakeData/books.json';


const initialState = {
    readingList : [],
    discoverList : allBooks,
    finishedList : []
}

const bookReducer =(state = initialState, action) => {
    console.log(action.payload)

    console.log(state.readingList);

    switch (action.type){
        case "Add_To_Reading_List" : {
            const newState = {
                ...state, 
                readingList: state.readingList.indexOf(action.payload) < 0 ? [...state.readingList, action.payload] : [...state.readingList]
            };
            return newState;
        }
        case "Remove_From_Reading_List" : {
            const newState = {
                ...state,
                readingList: state.readingList.filter(book => book.id !== action.payload.id)
            }
            return newState;
        }
        case "Finish_From_Book_List": {
            const newState = {
                ...state,
                readingList: state.readingList.filter(book => book.id !== action.payload.id),
                finishedList: state.finishedList.indexOf(action.payload) < 0 ? [...state.finishedList, action.payload] : [...state.finishedList]
            };
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default bookReducer;