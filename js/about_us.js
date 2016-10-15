$(document).ready(function() {
    $('.profileSelect').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".nav").addClass("dark");
        } else {
            $(".nav").removeClass("dark");
        }
    });
});

function louis() {
    document.getElementById("about-us-bio").innerHTML = "Louis Tay is an Assistant Professor in psychology at Purdue University. His research interests lie in well-being and research methodology. He has published in journals such as Psychological Bulletin, Journal of Personality and Social Psychology, Psychological Science, and Emotion Review. He serves on the editorial boards of four journals: Journal of Applied Psychology, Psychological Assessment, Organizational Research Methods, and Journal of Management. His research has been featured in outlets such as the Wall Street Journal, Scientiﬁc American Mind, Psychology Today, and MSNBC. He was recognized as a “Rising Star” by the Association of Psychological Science in 2015.";
    document.getElementById("about-us-dept").innerHTML = "Department of Psychological Sciences";
    document.getElementById("about-us-university").innerHTML = "Purdue University";
    document.getElementById("about-us-person").innerHTML = "<b>Louis Tay, Assistant Professor</b>";
    document.getElementById("imageProfile").src = "../images/about_us/Louis_large.png";
}
function stephen() {
    document.getElementById("about-us-bio").innerHTML = "Stephen Stark is a Professor in psychology at the University of South Florida, where he teaches courses on psychometrics, personnel selection, and industrial-organizational psychology. His research focuses on item response theory forced-choice modeling, differential item functioning detection, computerized adaptive testing, and personality measurement. He is the co-editor of International Journal of Testing and serves on the editorial boards of Applied Psychological Measurement, Journal of Business and Psychology, and Personnel Assessment and Decisions. He is a Fellow of the Society of Industrial and Organizational Psychology, the American Psychological Association, and the U.S. Army Research Institute Consortium Fellows Program, as well as a member of the American Educational Research Association.";
    document.getElementById("about-us-dept").innerHTML = "Department of Psychology";
    document.getElementById("about-us-university").innerHTML = "University of South Florida";
    document.getElementById("about-us-person").innerHTML = "<b>Stephen Stark, Professor</b>";
    document.getElementById("imageProfile").src = "../images/about_us/Stephen_large.png";
}
function ringo() {
    document.getElementById("about-us-bio").innerHTML = "Associate Professor Ho Moon-ho is a faculty member in School of Humanities and Social Sciences since 2005. He received his Bachelor degree in Psychology from the Chinese University of Hong Kong, Master in Statistics and PhD in Quantitative Psychology from the University of Illinois at Urbana-Champaign. He worked at McGill University (Canada) as Assistant Professor before he joined NTU. His research interests include high-dimensional data analysis methods, longitudinal data analytic method, multilevel modeling, psychometrics and structural equation modeling. He has published over 30 papers in psychology and statistics journals.";
    document.getElementById("about-us-dept").innerHTML = "Division of Psychology";
    document.getElementById("about-us-university").innerHTML = "Nanyang Technological University";
    document.getElementById("about-us-person").innerHTML = "<b>Ho Moon-ho Ringo, Associate Professor</b>";
    document.getElementById("imageProfile").src = "../images/about_us/Ringo_large.png";
}
function lauren() {
    document.getElementById("about-us-bio").innerHTML = "Lauren Kuykendall is an Assistant Professor of Industrial-Organizational Psychology at George Mason University. She received her bachelor’s degree in psychology and philosophy from Wofford College in Spartanburg, SC and her PhD in Industrial-Organizational Psychology from Purdue University in West Lafayette, IN in 2015, after which she joined the faculty at George Mason. Her research focuses on worker well-being, specifically on understanding the importance of leisure activities and malleable individual characteristics for enhancing well-being. Her research has been published in journals such as <em>Psychological Bulletin</em>, <em>International Journal of Psychology</em>, and <em>Emotion Review</em> (forthcoming).";
    document.getElementById("about-us-dept").innerHTML = "Department of Psychology";
    document.getElementById("about-us-university").innerHTML = "George Mason University";
    document.getElementById("about-us-person").innerHTML = "<b>Lauren Kuykendall, Assistant professor</b>";
    document.getElementById("imageProfile").src = "../images/about_us/Lauren_large.png";
}
function vincent() {
    document.getElementById("about-us-bio").innerHTML = "Vincent Ng is a Ph.D. student in the Industrial/Organizational Psychology program at Purdue University. He received his bachelor’s in psychology from Vassar College and graduated <em>summa cum laude</em> from the I/O psychology master’s program at Salem State University. His research focuses on understanding and assessing character from a positive psychology perspective, how it relates to different indices of well-being and performance, and how these relationships can inform selection and development practices in the work context.";
    document.getElementById("about-us-dept").innerHTML = "Department of Psychological Sciences";
    document.getElementById("about-us-university").innerHTML = "Purdue University";
    document.getElementById("about-us-person").innerHTML = "<b>Vincent Ng, Graduate Student</b>";
    document.getElementById("imageProfile").src = "../images/about_us/Vincent_large.png";
}
function phil() {
    document.getElementById("about-us-bio").innerHTML = "Philseok Lee is a doctoral candidate in the industrial and organizational psychology at University of South Florida. His research interests include development/application of item response theory for noncognitive assessments, differential item functioning and linking/equating for large-scale noncognitive testing program, measurement invariance testing using multilevel factor mixture model, multi-group structural equation model in industrial and organizational or educational settings. He will be joining to South Dakota State University as an assistant professor in the industrial and organizational psychology program 2016 Fall.";
    document.getElementById("about-us-dept").innerHTML = "Department of Psychology";
    document.getElementById("about-us-university").innerHTML = "University of South Florida";
    document.getElementById("about-us-person").innerHTML = "<b>Philseok Lee, Doctoral Candidate</b>";
    document.getElementById("imageProfile").src = "../images/about_us/Phil_large.png";
}
