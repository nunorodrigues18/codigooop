function aluno(nomeCompleto, tamanhoPessoa, disciplinaFav, comidaFav, equipaFavorita, dataNascimento){
		this.nome = nomeCompleto;
		this.altura = tamanhoPessoa;
		this.disciplina = disciplinaFav;
		this.comida = comidaFav;
		this.equipa = equipaFavorita;
		this.data = dataNascimento;
		this.saudacao = function(){	
			console.log("Olá, meu nome é " + this.nome + ", tenho " + this.altura + " metros de altura, minha disciplina favorita é " + this.disciplina + ", minha comida favorita é " + this.comida + ", minha equipa favorita é o " + this.equipa + " e nasci no dia " +this.data)
		}
}

var andre = new aluno("André Costa", "1,65", "Matemática", "pizza", "Belenenses", "18/04/2000")
	andre.saudacao();
	
var antonio = new aluno("António Lourenço", "1,69", "Francês", "couve bruxelas", "Benfica", "25/04/2000")
	antonio.saudacao();
	
var beatriz = new aluno("Beatriz Barreto", "1,68", "Alemão", "lasanha", "Sporting", "18/04/2000")
	beatriz.saudacao();
	
var franciscoE = new aluno("Francisco Esteves", "1,70", "português", "arroz malandrino", "Sporting", "30/04/2000")
	franciscoE.saudacao();
	
var franciscoR = new aluno("Francisco Rodrigues", "1,98", "aplicações informáticas", "arroz de marisco", "Porto", "17/04/2000")
	franciscoR.saudacao();
	
var daniel = new aluno("Daniel Serrano", "1,54", "aplicações informáticas", "arroz de tamboril", "Porto", "15/04/2000")
	daniel.saudacao();
	
var fabio = new aluno("Fábio Franco", "1,78", "português", "couve bruxelas", "Sporting", "19/07/2000")
	fabio.saudacao();
	
var joaoN = new aluno("João Neves", "1,64", "Educação Fisica", "bacalhau à lagareiro", "Portimonense", "05/04/2000")
	joaoN.saudacao();
	
var joaoM = new aluno("João Madeira", "1,80", "Educação Física", "polvo", "Benfica", "08/09/2000")
	joaoM.saudacao();
	
var goncalo = new aluno("Gonçalo Simão", "1,75", "aplicações informáticas", "bacalhau com natas", "Sporting", "10/04/2000")
	goncalo.saudacao();
	
var luis = new aluno("Luís Catarino", "1,66", "aplicações informáticas", "atum", "Benfica", "14/04/2000")
	luis.saudacao();
	
var miguel = new aluno("Miguel Pinto", "1,64", "aplicações informáticas", "frango assado", "Porto", "25/04/20000")
	miguel.saudacao();
	
var maria = new aluno("Maria Inês", "1,87", "aplicações informáticas","frango cozido", "Sporting", "13/07/2000")
	maria.saudacao();
	
var nuno = new aluno("Nuno Rodrigues", "1,56", "Português", "frango grelhado", "Benfica", "17/08/2000")
	nuno.saudacao();
	
var pedro = new aluno("Pedro Fonseca", "1,34", "Matemática", "grelos", "Portimonense", "16/09/2000")
	pedro.saudacao();
	
var miguelD = new aluno("Miguel Dionísio", "1,77", "aplicações informáticas", "grelos com puré", "Arouca", "30/08/2000")
	miguelD.saudacao();
	
var ricardoG = new aluno("Ricardo Gonçalves", "1,74", " aplicações informáticas", "grelos salteados", "Braga", "20/07/2000")
	ricardoG.saudacao();
	
var sandu = new aluno("Sandu Lungu", "1,72", "Russo", "Solyanka", "Benfica", "24/06/20000")
	sandu.saudacao();
	
var ricardoP = new aluno("Ricardo Pereira", "1,66", "Português", "nuggets", "Benfica", "16/09/2000")
	ricardoP.saudacao();
	
var rodrigo = new aluno("Rodrigo Valério", "1,88", "Matemática", "cheeseburger", "Sporting", "18/07/2000")
	rodrigo.saudacao();
	
var samuel = new aluno("Samuel Vaz", "1,70", "aplicações informáticas", "big mac", "Guimarães", "19/10/2000")
	samuel.saudacao();
	
var tomas = new aluno("Tomás Feith", "1,64", "Física", "Mc Royal Bacon", "Sporting", "24/11/2000")
	tomas.saudacao();
	
var tiago = new aluno(" Tiago Arriegas", "1,67", "aplicações informáticas", "CBO", "Benfica", "26/04/2000")
	tiago.saudacao();
	
var antonio = new aluno("António Campaniço", "1,78", "Matemática", "paõ com manteiga", "Porto", "27/05/2000")
	antonio.saudacao();