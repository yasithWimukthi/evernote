export const addNote = (note)=>{
    return (dispatch,getState,{getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt : new Date()
            })
            .then(() =>{
                console.log('Note added successfully');
            })
            .catch(err =>console.log(err));
    }
};