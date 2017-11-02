package cn.venice.D00.model;

/**
 * D0004 entity. @author MyEclipse Persistence Tools
 */

public class D0004 implements java.io.Serializable {

	// Fields

	private String menuid;
	private String text;
	private String url;

	// Constructors

	/** default constructor */
	public D0004() {
	}

	/** minimal constructor */
	public D0004(String menuid) {
		this.menuid = menuid;
	}

	/** full constructor */
	public D0004(String menuid, String text, String url) {
		this.menuid = menuid;
		this.text = text;
		this.url = url;
	}

	// Property accessors

	public String getMenuid() {
		return this.menuid;
	}

	public void setMenuid(String menuid) {
		this.menuid = menuid;
	}

	public String getText() {
		return this.text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}