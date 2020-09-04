function sendSignal(clicks){
    clicks+=1
    if(clicks<2){
        console.log(`Se ha realizado ${clicks} Click`)
    }else{
        console.log(`Se ha realizado ${clicks} Clicks`)
    }
    return clicks
    
}
export default sendSignal;