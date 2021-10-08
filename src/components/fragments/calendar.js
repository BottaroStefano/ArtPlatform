
export default function  getCalendar(gma){
    let date = String(gma).split('-');       
    let yy =date[0];                                    
    let tmpday = date[2].split('T');
    let dd =tmpday[0];
    let mm= (date[1]-1);
    var mNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let month = mNames[mm];
    
    return (
        <span className="block relative h-30  flex justify-left items-left pr-4 pb-4">                                            
            <h3 className="text-grey-800 text-sm font-medium px-4 py-1 bg-red-700 text-red-100 bg-opacity-75 rounded">   
                <div className="justify-center items-center text-4xl">{dd}</div>                                        
                <div className="justify-center items-center"> {month}</div> 
                <div className="justify-center items-center text-2xl">{yy}</div>                                                                     
            </h3>                                             
        </span>    
        )
};