function generateFibonacci(numTerms) {
    let sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.join(', ');
}

document.getElementById('generateBtn').addEventListener('click', function() {
    let numTerms = parseInt(document.getElementById('numTerms').value);
    let sequenceDisplay = document.getElementById('sequenceDisplay');
    if (!isNaN(numTerms) && numTerms > 0) {
        let fibonacciSequence = generateFibonacci(numTerms);
        sequenceDisplay.textContent = `Fibonacci Sequence: ${fibonacciSequence}`;
    } else {
        sequenceDisplay.textContent = 'Please enter a valid number of terms.';
    }
});