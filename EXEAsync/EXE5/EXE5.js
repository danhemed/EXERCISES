import { count } from 'console';
import os from 'os';

let counter = 0;
const maxRuns = 5;

const memoryLogger = setInterval(() => {
    if (counter >= maxRuns) {
        clearInterval(memoryLogger);
        console.log(`Memory logging complete`);
        return;
    }
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const perFreeMem = totalMem / freeMem * 100;

    console.log(`Free Memory: ${perFreeMem.toFixed(2)} %`);

    counter++;
}, 2000);

