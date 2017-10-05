<?php

class Application_Model_Vendedores
{

    public function __construct()
    {
        $this->config = new Zend_Config_Ini('../application/configs/application.ini', 'production');
        $this->cliente = new Zend_Rest_Client('https://app.alegra.com');
        $this->cliente->returnResponse(true);
        $this->cliente->getHttpClient()->setHeaders(
            array('Authorization' => "Basic ". $this->config->alegra->token)
        );
    }

    public function obtenerVendedores() {

        $resultado = $this->cliente->restGet('/api/v1/sellers');
        return Zend_Json::decode($resultado->getBody());
    }


}

