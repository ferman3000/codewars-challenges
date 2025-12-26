function validateRace(moves) {
    let InitialRace = []
    for (const x in moves) {
        let initialPostition = parseInt(x) + moves[x]
        if ((initialPostition < 0) || (initialPostition >= moves.length))
            return false
        InitialRace[x] = initialPostition
    }
    const uniquePositions = new Set(InitialRace);
    return uniquePositions.size === InitialRace.length;
}

result = validateRace([0, 2, 2])
