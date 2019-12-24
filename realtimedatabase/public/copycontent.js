
//serial number
  function copyingserialnumber(){
    slno  =  document.getElementById('inputslno').value;
   document.getElementById('inputslno').value = NumberWithLeadingZeroes(slno);
    document.getElementById('inputslnobill').value =  document.getElementById('inputslno').value;
  }




  function NumberWithLeadingZeroes (n)
{
    if ( n< 10 )
    {
        return ( '000' + n.toString () );
    }
    else if ( n< 100 )
    {
        return ( '00' + n.toString () );
    }
    else if ( n< 1000 )
    {
        return ( '0' + n.toString () );
    }
    else
    {
        return ( n);
    }
}


//serial number



function copyingorderdate(){
    document.getElementById('orderdatepickerbill').value =  document.getElementById('orderdatepicker').value;
  }


  function copyingdispatchdate(){
    document.getElementById('dispatchdatepickerbill').value =  document.getElementById('dispatchdatepicker').value;
  }