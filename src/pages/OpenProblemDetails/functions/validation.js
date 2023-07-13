const validation = (data) => {
    const text = data.description
    return new Promise((resolve, reject) => {
        if(text.trim().length > 0 ){
            resolve();
        }else{
            reject(new Error("Empty fields"));
        }
    })
}

export default validation; 