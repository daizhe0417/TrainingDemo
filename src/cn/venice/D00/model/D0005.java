package cn.venice.D00.model;

/**
 * D0005 entity.
 */

public class D0005 implements java.io.Serializable {

	// Fields

	private Integer id;
	private String roleno;
	private String menuid;

	// Constructors

	/** default constructor */
	public D0005() {
	}

	/** full constructor */
	public D0005(String roleno, String menuid) {
		this.roleno = roleno;
		this.menuid = menuid;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRoleno() {
		return this.roleno;
	}

	public void setRoleno(String roleno) {
		this.roleno = roleno;
	}

	public String getMenuid() {
		return this.menuid;
	}

	public void setMenuid(String menuid) {
		this.menuid = menuid;
	}

}