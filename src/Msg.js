 function Msg({nam}){
    return (
        <div>
            <h1>Hello,{nam}😁😁😁😁😁</h1>
        </div>
    );
}

// 1. Named import & exports -latest

 const double =(n) =>n*2;


// 2. end of file

export {Msg,double}

// 3.default  inports & export - old - only one can be exported per file