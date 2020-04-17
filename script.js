function attempt(available,allowed,preferred){
    var res = [];
    var curNum;
    //check each prefered number
    for(v=0;v<=preferred.length-1;v++){
        //temporery current number
        if(preferred[v]!='any')curNum=preferred[v];
        //try find equal match
        if(findMatch(0,preferred[v],allowed)){
            if(findMatch(0,preferred[v],available)){
                res.push(preferred[v]);
            }
        }else if(curNum===preferred[v]){
            //trying to find larger number that fits the condition
            while(findLarger(curNum,allowed) && curNum){
                curNum = findLarger(curNum,allowed);
                //find match in other pref & result
                if(!findMatch(v+1,curNum,preferred) && !findMatch(0,curNum,res)){
                    //check availability
                    if(findMatch(0,curNum,available)){
                        res.push(curNum);
                        curNum = false;
                    }
                }
            }
            //if cycle up ahead didn't work, we have to try find lower numbers
            //reset current number value
            if(preferred[v]!='any')curNum=preferred[v];
             while(findSmaller(curNum,allowed) && curNum){
                curNum = findSmaller(curNum,allowed);
                //find match in other pref & result
                if(!findMatch(v+1,curNum,preferred) && !findMatch(0,curNum,res)){
                    //check availability
                    if(findMatch(0,curNum,available)){
                        res.push(curNum);
                        curNum = false;
                    }
                }
            }
            //if both, lower and higher matches don't fit, go for next number
        } else if (preferred[v]==='any'){
            //find largest allowed number
            //make checks for equal or smaller
        }
    }
    return res;
}
function findMatch(countPoint,number,list){
    check = false;
    for(e=countPoint;e<=list.length-1;e++){
        if(list[e]===number)return true;
    }
    return check;
}
function findLarger(number,list){
    nextNum=list[0];
    for(l=1;l<=list.length-1;l++){
        if(nextNum>=list[l] && list[l] > number)nextNum=list[l];
    }
    if(nextNum===number)return false;
    else return nextNum;
}
function findSmaller(number,list){
    nextNum=list[0];
    for(l=1;l<=list.length-1;l++){
        if(nextNum>=list[l] && list[l] < number)nextNum=list[l];
    }
    if(nextNum===number)return false;
    else return nextNum;
}

