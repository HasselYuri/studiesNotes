const ServicoExercicio = require("../services/exercicio");

const servico = new ServicoExercicio();

class ControllerExercicio {
  Somar(req, res) {
    try {
      const result = servico.Somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Deu ruim" });
    }
  }
  ConvertendoTemperaturas(req, res) {
    try {
      const termometro = servico.ConvertendoTemperaturas(req.body.temperatura);
      res.status(200).json({
        message: `A temperatura convertida em F equivale a: ${termometro}.`,
      });
    } catch (error) {
        console.log(error);
      res.status(500).json({ message: "Deu ruim" });
    }
  }
}

module.exports = ControllerExercicio;
