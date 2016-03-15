var observableModule = require("data/observable");

function User(info){
	info = info || {};
	
	var viewModel = new observableModule.Observable(null);
		
	viewModel.login = function(){
		var username = "vinicius.carvalho@class-solutions.com.br";
            var password = "vcs152436CS";
            var endPoint = "https://classsolutions.sharepoint.com/sites/Vinicius";
            var stsEndpoint = "https://login.microsoftonline.com/extSTS.srf";
            var signInUrl = "https://classsolutions.sharepoint.com/_forms/default.aspx?wa=wsignin1.0";
            var browserHost = "classsolutions.sharepoint.com"; //e.g. mycompany.sharepoint.com 
            var browserUserAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36";

            var SMAL = "<s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\" " +
                       "xmlns:a=\"http://www.w3.org/2005/08/addressing\" " +
                       "xmlns:u=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\"> " +
                       "<s:Header> <a:Action s:mustUnderstand=\"1\">http://schemas.xmlsoap.org/ws/2005/02/trust/RST/Issue</a:Action> " +
                       "<a:ReplyTo> <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address> </a:ReplyTo> " +
                       "<a:To s:mustUnderstand=\"1\">https://login.microsoftonline.com/extSTS.srf</a:To> " +
                       "<o:Security s:mustUnderstand=\"1\" xmlns:o=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd\"> " +
                       "<o:UsernameToken> " +
                       "<o:Username>{USERNAME}</o:Username> " +
                       "<o:Password>{PASSWORD}</o:Password> </o:UsernameToken> </o:Security> </s:Header> " +
                       "<s:Body> <t:RequestSecurityToken xmlns:t=\"http://schemas.xmlsoap.org/ws/2005/02/trust\"> " +
                       "<wsp:AppliesTo xmlns:wsp=\"http://schemas.xmlsoap.org/ws/2004/09/policy\"> " +
                       "<a:EndpointReference> " +
                       "<a:Address>{ENDPOINTREFERENCE}</a:Address> </a:EndpointReference> </wsp:AppliesTo> " +
                       "<t:KeyType>http://schemas.xmlsoap.org/ws/2005/05/identity/NoProofKey</t:KeyType> " +
                       "<t:RequestType>http://schemas.xmlsoap.org/ws/2005/02/trust/Issue</t:RequestType> " +
                       "<t:TokenType>urn:oasis:names:tc:SAML:1.0:assertion</t:TokenType> </t:RequestSecurityToken> </s:Body> " +
                       "</s:Envelope>";
					   
			

	};
	
	return viewModel;
}

module.exports = User;