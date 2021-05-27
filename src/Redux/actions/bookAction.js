export const addToReadingList = (payload) => {
    return {
        type: "Add_To_Reading_List",
        payload
    }
}

export const removeFromReadingList = (payload) => {
    return {
        type: "Remove_From_Reading_List",
        payload
    }
}

export const finishedBookList = (payload) => {
    return {
        type: "Finish_From_Book_List",
        payload

    }
}