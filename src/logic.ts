
export function SumArray(num: number[]): number {
  
    return num.reduce((a,b) => a + b, 0);

}

export function Average(num: number[]): number {
  
    if(num.length === 0)return 0;

    return SumArray(num)/num.length;
        
}

export function MaxNumber(num: number[]): number {

    return Math.max(...num);

}