pragma solidity ^0.5.8;
pragma experimental ABIEncoderV2;
import "./LibString.sol";

contract GeneDrugRepo {
    using LibString for *;

   struct GeneDrugRelation {
        string geneName;   //基因名称
        uint variantNumber; //变体编号
        string drugName;  //药物名称
        uint totalCount;  //总条数
        uint improvedCount; //改进数目
        string improvedPercent; //改进百分比
        uint unchangedCount; //没变化
        string unchangedPercent;
        uint deterioratedCount; //恶化数目
        string deterioratedPercent;
        uint suspectedRelationCount; //疑似基因相关
        string suspectedRelationPercent; 
        uint sideEffectCount;  //副作用
        string sideEffectPercent;
    }
	
	//定义存储所有数据的mapping
	mapping(string => GeneDrugRelation) private geneData;
	//定义一个数组存geneData的key,方便查询数据
	string[] geneDataKeyArr;
	//定义另外一个mapping存储对应的关系
	mapping(string => Key) private keyMapping;
	//定义一个结构体不能直接用数组，主要是为了存数据key为ab,[abc,abd,abe...]
	struct Key {
        string[] keys;
    }
	//疑似基因相关
	string[] private relation;
	//交易总条数
	uint total;
	//钱包地址和观察
	mapping(address => uint) private addrMap;
	
    /** Insert an observation into your contract, following the format defined in the data readme. 
        This function has no return value. If it completes it will be assumed the observations was recorded successfully. 

        Note: case matters for geneName and drugName. GyNx3 and gynx3 are treated as different genes.
     */
    function insertObservation (
        string memory geneName,
        uint variantNumber,
        string memory drugName,
        string memory outcome,  // IMPROVED, UNCHANGED, DETERIORATED. This will always be capitalized, you don't have to worry about case. 
        bool suspectedRelation,
        bool seriousSideEffect
    ) public {
        uint  Percentage=0;
		//交易条数+1
		total+=1;
		//钱包地址观察数
		addrMap[msg.sender]+=1;
        // Code here
		//组合key
        string memory keyABC =geneName;
		keyABC=LibString.concat(keyABC,"+",LibString.toString(variantNumber));
		keyABC=LibString.concat(keyABC,"+",drugName);
		//存abc的key
		geneDataKeyArr.push(keyABC);
		//key:ab
		string  memory keyAB=LibString.concat(geneName,"+",LibString.toString(variantNumber));
		//key:ac
		string memory  keyAC=LibString.concat(geneName,"+",drugName);
		//储数据
		geneData[keyABC]=GeneDrugRelation({
	     geneName:geneName,
         variantNumber:variantNumber,
         drugName:drugName,
         totalCount:0,
         improvedCount:0,
         improvedPercent:"0.00" ,
         unchangedCount:0,
         unchangedPercent:"0.00" ,
         deterioratedCount:0,
         deterioratedPercent:"0.00",
         suspectedRelationCount:0,
         suspectedRelationPercent:"0.00",
         sideEffectCount:0,
         sideEffectPercent:"0.00"
		});
		//存ab-abc ac-abc
		if(geneData[keyABC].totalCount==0){
		keyMapping[keyAB].keys.push(keyABC);
		 keyMapping[keyAC].keys.push(keyABC);

		}
		 //结构体里面别的数据加减
		 geneData[keyABC].totalCount+=1;
		if(suspectedRelation==true){
		    geneData[keyABC].suspectedRelationCount+=1;relation.push(keyABC);
		  Percentage =  geneData[keyABC].suspectedRelationCount*10000000/geneData[keyABC].totalCount;
		  geneData[keyABC].suspectedRelationPercent=LibString.uint2str(Percentage);
		  
		}
		if(seriousSideEffect==true){geneData[keyABC].sideEffectCount+=1;
		    		  Percentage =  geneData[keyABC].sideEffectCount*10000000/geneData[keyABC].totalCount;
		  geneData[keyABC].sideEffectPercent=LibString.uint2str(Percentage);
		}
		//效果IMPROVED, UNCHANGED, DETERIORATED
		if(LibString.equals(outcome, "IMPROVED")){
		geneData[keyABC].improvedCount+=1;	
		Percentage =  geneData[keyABC].improvedCount*10000000/geneData[keyABC].totalCount;
		 geneData[keyABC].improvedPercent=LibString.uint2str(Percentage);
		 return;
		}

		if(LibString.equals(outcome, "UNCHANGED")){
		geneData[keyABC].unchangedCount+=1;	
		Percentage =  geneData[keyABC].unchangedCount*10000000/geneData[keyABC].totalCount;
		 geneData[keyABC].unchangedPercent=LibString.uint2str(Percentage);
		 return;
		}
		if(LibString.equals(outcome, "DETERIORATED")){
		    
		geneData[keyABC].deterioratedCount+=1;	
		Percentage =  geneData[keyABC].deterioratedCount*10000000/geneData[keyABC].totalCount;
		 geneData[keyABC].deterioratedPercent=LibString.uint2str(Percentage);
		 return;
		}
		
    }

    /** Takes geneName, variant-number, and drug-name as strings. A value of "*" for any name should be considered as a wildcard or alternatively as a null parameter.
        Returns: An array of GeneDrugRelation Structs which match the query parameters

        To clarify here are some example queries:
        query("CYP3A5", "52", "pegloticase") => An array of the one relation that matches all three parameters
        query("CYP3A5","52","*") => An array of all relations between geneName, CYP3A5, variant 52, and any drug
        query("CYP3A5","*","pegloticase") => An array of all relations between geneName, CYP3A5 and drug pegloticase, regardless of variant
        query("*","*","*") => An array of all known relations. 

        Note that capitalization matters. 
    */
    function query(
        string memory geneName,
        string memory variantNumber,
        string memory drug
    ) public view returns (GeneDrugRelation[] memory) {
		GeneDrugRelation[] memory arry=new GeneDrugRelation[](total);

     //	GeneDrugRelation[] memory arry;
        // 查询全部
		if(LibString.equals(geneName,"*")){
			 for (uint i = 0;i <geneDataKeyArr.length ;i++) {
              arry[i]=geneData[geneDataKeyArr[i]];
			 }
		return arry;
		}
		if(LibString.equals(variantNumber,"*")){
			string memory keyAC=LibString.concat(geneName,"+",drug);
			 for (uint j = 0;j <keyMapping[keyAC].keys.length ;j++) {
				 arry[j]=geneData[keyMapping[keyAC].keys[j]];
			 }
		return arry;	 
		}
		if(LibString.equals(drug,"*")){
			string memory keyAB=LibString.concat(geneName,"+",variantNumber);
			 for (uint k = 0;k <keyMapping[keyAB].keys.length ;k++) {
				  arry[k]=geneData[keyMapping[keyAB].keys[k]];
			 }
		return arry;	 
		}
		string memory keyABC=LibString.concat(geneName,"+",variantNumber);
		keyABC=LibString.concat(keyABC,"+",drug);
    	arry[0]=geneData[keyABC];
		return arry;
    }

    /** Takes: geneName,-name, variant-number, and drug-name as strings. Accepts "*" as a wild card, same rules as query
        Returns: A boolean value. True if the relation exists, false if not. If a wild card was used, then true if any relation exists which meets the non-wildcard criteria.
     */
    function entryExists(
        string memory geneName,
        string memory variantNumber,
        string memory drug
    ) public view returns (bool){
        // Code here
    // 查询全部
		if(LibString.equals(geneName,"*")){
		  for (uint i = 0;i <geneDataKeyArr.length ;i++) {
	     	  if(geneData[geneDataKeyArr[i]].suspectedRelationCount!=0){
		      return true;
		  }
		}
		return false;
		}
		if(LibString.equals(variantNumber,"*")){
			string memory keyAC=LibString.concat(geneName,"+",drug);
			 for (uint j = 0;j <keyMapping[keyAC].keys.length ;j++) {
		     if(geneData[keyMapping[keyAC].keys[j]].suspectedRelationCount!=0){
		       return true;
			 }
			     
			 }
		return false;	 
		}
		if(LibString.equals(drug,"*")){
			string memory keyAB=LibString.concat(geneName,"+",variantNumber);
			 for (uint k = 0;k <keyMapping[keyAB].keys.length ;k++) {
					     if(geneData[keyMapping[keyAB].keys[k]].suspectedRelationCount!=0){
		       return true;
			 }

			 }
		return false;	 
		}
		string memory keyABC=LibString.concat(geneName,"+",variantNumber);
		keyABC=LibString.concat(keyABC,"+",drug);
		 if(geneData[keyABC].suspectedRelationCount!=0){
		       return true;
		}
   
    } 
    /** Return the total number of known relations, a.k.a. the number of unique geneName,-name, variant-number, drug-name pairs
     */
    function getNumRelations () public view returns(uint){
        // Code here
	return relation.length;
    }
    
    /** Return the total number of recorded observations, regardless of sender.
     */
    function getNumObservations() public view returns (uint) {
        // Code here
		return total;
    }

    /** Takes: A wallet address.
        Returns: The number of observations recorded from the provided wallet address
     */
    function getNumObservationsFromSender(address sender) public view returns (uint) {
        // Code here
		return addrMap[sender];
    }
    
    //==========================================================================test=====================================================
    //concat
        function ces() public view returns (string memory) {
      string memory a="ab";
      string memory b="c";
      string memory c=LibString.concat(a,b);
		return c;
    }
    //equals
            function ces2(string memory a,string memory b) public view returns ( bool ) {
    //   string memory a="ab";
    //   string memory b="c";
      bool  c=LibString.equals(a,b);
		return c;
    }
    
    //toString
    function ces3(uint a) public view returns ( string memory ) {
      string memory c=LibString.toString(a);
		return  c;
    }
    //key 
    function ces4(string memory a) public view returns (  uint b ) {
    b= keyMapping[a].keys.length;
		return  b;
    }
    
   function ces5(string memory a) public view returns (  string memory b ) {
     b= keyMapping[a].keys[0];
    }
//uint2str 12345678
   function ces6( uint a) public view returns ( string memory b ) {
     b=LibString.uint2str(a);
    }
    
  function ces7( uint a) public view returns ( string memory b ) {
   bytes memory bstr = new bytes(2);
   bstr[0]=byte("#");
   bstr[1]=byte(uint8(48 + a % 10));
   return string(bstr);
    }
}
