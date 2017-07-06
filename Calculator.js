switch(process.argv[3])
{
    case 'tambah':
        console.log(Number(process.argv[2]) + Number(process.argv[4]));
        break;
    case 'kurang':
        console.log(Number(process.argv[2]) - Number(process.argv[4]));
        break;
    case 'kali':
        console.log(Number(process.argv[2]) * Number(process.argv[4]));
        break;
    case 'bagi':
        console.log(Number(process.argv[2]) / Number(process.argv[4]));
        break;
    case 'mod':
        console.log(Number(process.argv[2]) % Number(process.argv[4]));
        break;
    case 'pangkat':
        console.log(Math.pow(Number(process.argv[2]),Number(process.argv[4])));
        break;
    default:
        console.log('Pilihan operator tidak ada');
        break;
}
