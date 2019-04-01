define(() => {
    return () => {
        let params = location.search.slice(1);
        return JSON.parse('{"' + params.replace(/=/g, '":"').replace(/&/g, '","') + '"}')
    }
});