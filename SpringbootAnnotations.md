## Springboot Annotations

### @SpringBootApplication      ->		Main class of the spring boot application it is the starting point.

@Bean 				              ->		Indicates that the method produces the bean to be managed by spring.

@Controller                 ->		The dispatch servelet will search for the controller annotation once it get reached then look 										for the corresponding api requests.

@Component				          -> 		Allows spring to automatically detect our custom beans.

@Autowired			            -> 		Enables us to inject the object dependency implicitly.

@ResquestMapping            ->		This will specify the http requests handled by the controller.

@RequestBody			          ->		Maps the http request body to a transfer domain (i.e deserilization of inbound httpreqeuest 										into java object).the common request from http are json body.

@ResponseBody   		        -> 		This controller tells that objects will automatically serialized into json fromat. 

@RestController             -> 		Combines the @Controller and @ResponseBody.

@GetMapping			  	        ->		To get the data -> shortcut for @RequestMapping(method = RequestMethod.Get).

@PostMapping			          -> 		To post the data -> shortcut for @RequestMapping(method = RequestMethod.Post).

@PutMapping				          ->		To put the data -> shortcut for @RequestMapping(method = RequestMethod.Put).

@DeleteMapping			        -> 		To Delete the data -> shortcut for @RequestMapping(method = RequestMethod.Delete).

@RequestParam			          -> 		Accessing the values in quere form like a+pathvariable+springboot.

@PathVariable			          -> 		Accessing the values in the form of URI template.

@Entity					            ->		This indicated the model of the project.

@Table 					            ->		This allows us to specify the table name and the table details.

@Id 					              -> 		This indicated the auto generated value. 

@GeneratedValue			        ->		@GeneratedValue(strategy = GenerationType.AUTO).

@Service				            -> 		Represents the service class the business logic for the project.

@Repository				          -> 		Represents the repository and also it indicates that there is native queries in that class.

@Qualifier		   		        ->		It is used when more controller class is used.

@CrossOrigin		            ->		Enables crossorigin for restful web services.

@ExceptionHandler	          ->		To handle the specific exceptions and sending the corresponding responses to the client.

@ControllerAdvice		        -> 		To handle the exceptions globally.

@Configuration    		      -> 		It is used as a source of bean definitions. It is a class level anotations.

@EnableAutoConfiguration    ->		It is placed on the main application class. Based on classpath settings, other beans, and 											various property settings, this annotation instructs SpringBoot to start adding beans.

@ComponentScan	            ->		It is used with the annotation @Configuration to allow Spring to know the packages to be 											scanned for annotated components.

@ConditionalOnProperty	    ->		With this annotation, we can make conditions on the values of properties.

@ConditionalOnResource	    ->		We can make Spring to use a definition only when a specific resource is present. 	

CrudRepository			        ->		Basic crud operations (create,retrive,update,delete).

JpaRepository		            ->		JPA repository extends crud repository and paging and sorting repository.


 



