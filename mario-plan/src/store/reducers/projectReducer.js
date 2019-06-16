const initState = {
    projects: [
        {id: '1', title: 'Help me find Peach', content: "Officia consequat adipisicing pariatur nulla officia laboris mollit fugiat tempor dolore dolore cupidatat. Deserunt nisi est qui qui cillum. Reprehenderit cillum magna mollit fugiat consectetur irure qui veniam commodo laborum aliquip consequat. Aliqua cupidatat dolore exercitation est anim ad fugiat. Nisi cupidatat pariatur non non eiusmod. Exercitation officia Lorem culpa mollit culpa elit proident sit culpa aliqua id sit mollit."},
        {id: '2', title: 'Collect all the stars', content: "Officia consequat adipisicing pariatur nulla officia laboris mollit fugiat tempor dolore dolore cupidatat. Deserunt nisi est qui qui cillum. Reprehenderit cillum magna mollit fugiat consectetur irure qui veniam commodo laborum aliquip consequat. Aliqua cupidatat dolore exercitation est anim ad fugiat. Nisi cupidatat pariatur non non eiusmod. Exercitation officia Lorem culpa mollit culpa elit proident sit culpa aliqua id sit mollit."},
        {id: '3', title: 'Egg hunt with Yoshi', content: "Officia consequat adipisicing pariatur nulla officia laboris mollit fugiat tempor dolore dolore cupidatat. Deserunt nisi est qui qui cillum. Reprehenderit cillum magna mollit fugiat consectetur irure qui veniam commodo laborum aliquip consequat. Aliqua cupidatat dolore exercitation est anim ad fugiat. Nisi cupidatat pariatur non non eiusmod. Exercitation officia Lorem culpa mollit culpa elit proident sit culpa aliqua id sit mollit."},
        {id: '4', title: 'Dinner with King Koopa', content: "Officia consequat adipisicing pariatur nulla officia laboris mollit fugiat tempor dolore dolore cupidatat. Deserunt nisi est qui qui cillum. Reprehenderit cillum magna mollit fugiat consectetur irure qui veniam commodo laborum aliquip consequat. Aliqua cupidatat dolore exercitation est anim ad fugiat. Nisi cupidatat pariatur non non eiusmod. Exercitation officia Lorem culpa mollit culpa elit proident sit culpa aliqua id sit mollit."}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;