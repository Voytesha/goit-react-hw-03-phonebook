
export function Filter ({value, onChange})  {
    return ( 
        <>
    <label >Find contact by name
        <input type='text' 
        value={value} 
        onChange={onChange}/>
        </label>
        </>
    );
}
        

