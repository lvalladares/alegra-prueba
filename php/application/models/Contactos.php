<?php

class Application_Model_Contactos
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

    private function eliminarCamposVacios($data) {

        return array_filter($data, array($this, "array_filter_recursivo"));
    }

    private function array_filter_recursivo($var) {

        if (is_array($var)) {
            return array_filter($var);
        } else if (!$var) {
            return false;
        } else {
            return true;
        }
    }

    private function formatearData($data) {

        $data["type"] = array();
        $data["address"] = array();

        if (array_key_exists("client", $data) && $data["client"] == true) {
            array_push($data["type"], 'client');
            unset($data["client"]);
        }

        if (array_key_exists("provider", $data) && $data["provider"] == true) {
            array_push($data["type"], 'provider');
            unset($data["provider"]);
        }

        if (array_key_exists("city", $data)) {
            $data["address"]["city"] = $data["city"];
            unset($data["city"]);
        }

        if (array_key_exists("address_record", $data)) {
            $data["address"]["address"] = $data["address_record"];
            unset($data["address_record"]);
        }

        return $data;

    }

    private function formatearRespuesta($respuesta) {
        if (array_key_exists("code", $respuesta)) {
            $respuesta["success"] = false;
        } else {
            $respuesta["success"] = true;
        }

        return $respuesta;
    }

    public function obtenerContactos() {

        $resultado = $this->cliente->restGet('/api/v1/contacts');
        return Zend_Json::decode($resultado->getBody());
    }

    public function obtenerUnContacto($id) {

        $resultado = $this->cliente->restGet('/api/v1/contacts/'.$id);
        return Zend_Json::decode($resultado->getBody());
    }

    public function editarContacto($data) {

        if (!array_key_exists("id", $data)) {
            return "Debe enviarse el ID";
        }

        $id = $data["id"];
        unset($data["id"]);

        $data = Zend_Json::encode($this->formatearData($data));

        $resultado = $this->cliente->restPut('/api/v1/contacts/'.$id, $data);
        $respuesta = Zend_Json::decode($resultado->getBody());
        return $this->formatearRespuesta($respuesta);
    }

    public function nuevoContacto($data) {

        $data = $this->formatearData($data);
        $data = Zend_Json::encode($this->eliminarCamposVacios($data));

        $resultado = $this->cliente->restPost('/api/v1/contacts/', $data);
        $respuesta = Zend_Json::decode($resultado->getBody());
        return $this->formatearRespuesta($respuesta);
    }

    public function eliminarUnContacto($data) {

        if (!array_key_exists("id", $data)) {
            return "Debe enviarse el ID";
        }

        $id = $data["id"];

        $resultado = $this->cliente->restDelete('/api/v1/contacts/'.$id);
        $respuesta = Zend_Json::decode($resultado->getBody());
        return $this->formatearRespuesta($respuesta);
    }


}
